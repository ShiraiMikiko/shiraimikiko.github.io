import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const url = "http://127.0.0.1:4321/";
const outputDir = join(root, "output");
const screenshotPath = join(outputDir, "site-home.png");
const mobileScreenshotPath = join(outputDir, "site-mobile.png");
const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

await mkdir(outputDir, { recursive: true });

const preview = spawn(
  process.execPath,
  [join(root, "node_modules", "astro", "astro.js"), "preview", "--host", "127.0.0.1", "--port", "4321"],
  {
    cwd: root,
    env: { ...process.env, ASTRO_TELEMETRY_DISABLED: "1" },
    stdio: ["ignore", "pipe", "pipe"],
  },
);

let logs = "";
preview.stdout.on("data", (chunk) => {
  logs += chunk.toString();
});
preview.stderr.on("data", (chunk) => {
  logs += chunk.toString();
});

async function waitForPreview() {
  const startedAt = Date.now();
  while (Date.now() - startedAt < 12_000) {
    if (preview.exitCode !== null) {
      throw new Error(`Astro preview exited early.\n${logs}`);
    }

    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // Preview is still starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error(`Astro preview did not become ready.\n${logs}`);
}

async function loadLazyImages(page) {
  await page.locator("#publications").scrollIntoViewIfNeeded();
  await page.locator("#blog").scrollIntoViewIfNeeded();
  await page.waitForFunction(
    () => Array.from(document.images).every((image) => image.complete && image.naturalWidth > 0),
    undefined,
    { timeout: 8_000 },
  );
}

let browser;
try {
  await waitForPreview();

  browser = await chromium.launch({
    executablePath: edgePath,
    headless: true,
  });

  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
  const failedRequests = [];
  page.on("requestfailed", (request) => {
    failedRequests.push(`${request.url()} :: ${request.failure()?.errorText ?? "failed"}`);
  });

  const response = await page.goto(url, { waitUntil: "networkidle" });
  assert.ok(response?.ok(), `Homepage returned ${response?.status() ?? "no response"}`);

  await loadLazyImages(page);
  await page.evaluate(() => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  });
  await page.waitForFunction(() => window.scrollY === 0);

  await page.screenshot({ path: screenshotPath, fullPage: true });

  const result = await page.evaluate(() => ({
    title: document.title,
    hasSections: ["about", "work", "publications", "blog", "cv"].map((id) =>
      Boolean(document.getElementById(id)),
    ),
    images: Array.from(document.images).map((image) => ({
      src: image.currentSrc,
      width: image.naturalWidth,
      height: image.naturalHeight,
    })),
    text: document.body.innerText,
  }));

  assert.match(result.title, /Gao Xin/);
  assert.deepEqual(result.hasSections, [true, true, true, true, true]);
  assert.match(result.text, /Infrastructure/);
  assert.match(result.text, /XunziALLM/);
  assert.match(result.text, /Nanjing Agricultural University/);
  assert.match(result.text, /Selected academic work/);
  assert.match(result.text, /Field notes/);
  assert.ok(result.images.length >= 7, "Expected profile, publication, and blog images");
  assert.equal(
    result.images.filter((image) => image.width > 0 && image.height > 0).length,
    result.images.length,
    "All images should load with non-zero dimensions",
  );
  assert.deepEqual(failedRequests, []);

  await page.click('[data-language-option="zh"]');
  const zhResult = await page.evaluate(() => ({
    lang: document.documentElement.lang,
    title: document.title,
    enPressed: document.querySelector('[data-language-option="en"]')?.getAttribute("aria-pressed"),
    zhPressed: document.querySelector('[data-language-option="zh"]')?.getAttribute("aria-pressed"),
    storedLanguage: localStorage.getItem("preferred-language"),
    text: document.body.innerText,
    innerWidth: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  assert.equal(zhResult.lang, "zh-CN");
  assert.match(zhResult.title, /\u9ad8\u946b/);
  assert.equal(zhResult.enPressed, "false");
  assert.equal(zhResult.zhPressed, "true");
  assert.equal(zhResult.storedLanguage, "zh");
  assert.match(zhResult.text, /\u81ea\u7136\u8bed\u8a00\u5904\u7406\u4e0e\u6587\u5316\u9057\u4ea7\u667a\u80fd\u8ba1\u7b97/);
  assert.match(zhResult.text, /\u8340\u5b50\u5927\u6a21\u578b/);
  assert.match(zhResult.text, /\u7814\u7a76\u4e0e\u8fd0\u7ef4/);
  assert.ok(
    zhResult.scrollWidth <= zhResult.innerWidth + 1,
    `Chinese desktop layout should not overflow horizontally: ${zhResult.scrollWidth} > ${zhResult.innerWidth}`,
  );

  await page.click('[data-language-option="en"]');
  const enResult = await page.evaluate(() => ({
    lang: document.documentElement.lang,
    enPressed: document.querySelector('[data-language-option="en"]')?.getAttribute("aria-pressed"),
    zhPressed: document.querySelector('[data-language-option="zh"]')?.getAttribute("aria-pressed"),
    storedLanguage: localStorage.getItem("preferred-language"),
    text: document.body.innerText,
  }));
  assert.equal(enResult.lang, "en");
  assert.equal(enResult.enPressed, "true");
  assert.equal(enResult.zhPressed, "false");
  assert.equal(enResult.storedLanguage, "en");
  assert.match(enResult.text, /Research and operations/);

  const desktopMetrics = await page.evaluate(() => ({
    innerWidth: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  assert.ok(
    desktopMetrics.scrollWidth <= desktopMetrics.innerWidth + 1,
    `Desktop layout should not overflow horizontally: ${desktopMetrics.scrollWidth} > ${desktopMetrics.innerWidth}`,
  );

  const mobilePage = await browser.newPage({ viewport: { width: 390, height: 1200 }, isMobile: true });
  await mobilePage.goto(url, { waitUntil: "networkidle" });
  await loadLazyImages(mobilePage);
  await mobilePage.evaluate(() => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  });
  await mobilePage.waitForFunction(() => window.scrollY === 0);
  await mobilePage.screenshot({ path: mobileScreenshotPath, fullPage: true });
  const mobileMetrics = await mobilePage.evaluate(() => ({
    innerWidth: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  assert.ok(
    mobileMetrics.scrollWidth <= mobileMetrics.innerWidth + 1,
    `Mobile layout should not overflow horizontally: ${mobileMetrics.scrollWidth} > ${mobileMetrics.innerWidth}`,
  );
  await mobilePage.close();

  console.log(`Preview verified: ${url}`);
  console.log(`Screenshot saved: ${screenshotPath}`);
  console.log(`Mobile screenshot saved: ${mobileScreenshotPath}`);
} finally {
  if (browser) await browser.close();
  preview.kill();
}
