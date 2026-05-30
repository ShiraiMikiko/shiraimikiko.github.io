import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { describe, it } from "node:test";
import assert from "node:assert/strict";

const root = process.cwd();

function read(relativePath) {
  return readFileSync(join(root, relativePath), "utf8");
}

describe("one-page academic site scaffold", () => {
  it("defines the expected Astro project files and scripts", () => {
    const pkg = JSON.parse(read("package.json"));

    assert.equal(pkg.scripts.dev, "node scripts/astro-command.mjs dev");
    assert.equal(pkg.scripts.build, "node scripts/build.mjs");
    assert.equal(pkg.scripts.preview, "node scripts/astro-command.mjs preview");
    assert.ok(existsSync(join(root, "astro.config.mjs")));
    assert.ok(existsSync(join(root, "src/pages/index.astro")));
    assert.ok(existsSync(join(root, "src/data/site.ts")));
  });

  it("keeps the site as a single-page anchor navigation experience", () => {
    const page = read("src/pages/index.astro");
    const data = read("src/data/site.ts");

    for (const anchor of ["#about", "#work", "#publications", "#blog", "#cv"]) {
      assert.match(data, new RegExp(`href: "${anchor}"`));
    }

    for (const sectionId of ["about", "work", "publications", "blog", "cv"]) {
      assert.match(page, new RegExp(`id="${sectionId}"`));
    }
  });

  it("ships publication PDFs and visual covers from the academic materials folder", () => {
    for (const asset of [
      "public/files/relic-narrative-organization.pdf",
      "public/files/poetry-motivation-organization.pdf",
      "public/files/metaee-agent-reflection.pdf",
      "public/files/cdh2025-implicit-emotion-poster.pdf",
      "public/files/dheac2025-relic-event-extraction.pdf",
      "public/images/publications/relic-narrative-organization.png",
      "public/images/publications/poetry-motivation-organization.png",
      "public/images/publications/metaee-agent-reflection.png",
      "public/images/publications/cdh2025-implicit-emotion.png",
      "public/images/publications/dheac2025-relic-event-extraction.png",
    ]) {
      assert.ok(existsSync(join(root, asset)), `${asset} should exist`);
    }
  });

  it("adds a blog and notes section with DHEAC presentation and photography entries", () => {
    const data = read("src/data/site.ts");
    const page = read("src/pages/index.astro");

    assert.match(data, /navBlog/);
    assert.match(data, /blog:\s*\[/);
    assert.match(data, /dheac2025-presentation\.jpg/);
    assert.match(data, /photography-notes\.jpg/);
    assert.match(page, /id="blog"/);
    assert.match(page, /class="blog-grid"/);
    assert.ok(existsSync(join(root, "public/images/blog/dheac2025-presentation.jpg")));
    assert.ok(existsSync(join(root, "public/images/blog/photography-notes.jpg")));
  });

  it("uses a durable local profile photo instead of the generated initials avatar", () => {
    const data = read("src/data/site.ts");
    const page = read("src/pages/index.astro");

    assert.match(data, /photo: "\/images\/profile\/profile-photo\.jpg"/);
    assert.match(page, /<img class="portrait" src={site\.profile\.photo}/);
    assert.ok(existsSync(join(root, "public/images/profile/profile-photo.jpg")));
    assert.ok(existsSync("D:\\A_CODE\\SHIRAI_CODE\\.z_academic_cv\\材料\\照片\\profile-photo-original.jpg"));
  });

  it("uses the latest CV-informed bilingual introduction with institutional and team links", () => {
    const data = read("src/data/site.ts");
    const page = read("src/pages/index.astro");

    assert.match(data, /gao_shirai@qq\.com/);
    assert.match(data, /https:\/\/github\.com\/ShiraiMikiko/);
    assert.match(data, /Master's student in Information Resources Management/);
    assert.match(data, /Natural Language Processing \/ Intelligent Computing for Cultural Heritage/);
    assert.match(data, /南京农业大学信息资源管理专业硕士研究生/);
    assert.match(data, /自然语言处理与文化遗产智能计算/);
    assert.match(data, /https:\/\/www\.njau\.edu\.cn\//);
    assert.match(data, /https:\/\/info\.njau\.edu\.cn\//);
    assert.match(data, /https:\/\/xunziallm\.njau\.edu\.cn\//);
    assert.match(data, /XunziALLM/);
    assert.match(data, /荀子大模型/);
    assert.match(page, /class="profile-link-list"/);
    assert.match(page, /data-i18n={`profile\.link\.\$\{index\}\.label`}/);
  });

  it("provides an in-page Chinese and English language toggle", () => {
    const data = read("src/data/site.ts");
    const page = read("src/pages/index.astro");

    assert.match(data, /copy:\s*{/);
    assert.match(data, /zh:\s*{/);
    assert.match(data, /heroTitle:\s*"中文历史文本 NLP/);
    assert.match(page, /id="language-switch"/);
    assert.match(page, /data-language-option="en"/);
    assert.match(page, /data-language-option="zh"/);
    assert.match(page, /data-i18n="heroTitle"/);
    assert.match(page, /localStorage\.setItem\("preferred-language"/);
    assert.match(page, /document\.documentElement\.lang/);
  });
});
