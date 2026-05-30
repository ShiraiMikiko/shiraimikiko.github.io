import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const astro = join(root, "node_modules", "astro", "astro.js");
const env = { ...process.env, ASTRO_TELEMETRY_DISABLED: process.env.ASTRO_TELEMETRY_DISABLED ?? "1" };

for (const command of ["check", "build"]) {
  const result = spawnSync(process.execPath, [astro, command], {
    cwd: root,
    env,
    stdio: "inherit",
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
