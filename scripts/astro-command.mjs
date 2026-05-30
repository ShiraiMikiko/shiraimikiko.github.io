import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const [command, ...args] = process.argv.slice(2);

if (!command) {
  console.error("Usage: node scripts/astro-command.mjs <astro-command> [...args]");
  process.exit(1);
}

const child = spawn(process.execPath, [join(root, "node_modules", "astro", "astro.js"), command, ...args], {
  cwd: root,
  env: { ...process.env, ASTRO_TELEMETRY_DISABLED: process.env.ASTRO_TELEMETRY_DISABLED ?? "1" },
  stdio: "inherit",
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 1);
});
