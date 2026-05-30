# Personal Site

One-page bilingual (EN/ZH) academic homepage built with Astro and deployed to GitHub Pages.

**Live site:** https://shiraimikiko.github.io/

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run test    # content checks (node:test)
npm run build   # astro check + astro build -> dist/
```

## Content

- Edit profile, work items, and publications in `src/data/site.ts` (all visible text is keyed as `{ en, zh }`).
- Put downloadable files in `public/files/`.
- Put publication images in `public/images/publications/`.

## Updating the live site

The site auto-deploys via GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)). To publish a change:

1. Edit content (usually just `src/data/site.ts`) and add any new assets under `public/`.
2. (Optional) verify locally: `npm run test && npm run build`.
3. Commit and push to `main`:

   ```bash
   git add -A
   git commit -m "Update content"
   git push
   ```

4. GitHub Actions then builds and publishes automatically. Track progress in the repo's **Actions** tab; the new version is usually live at https://shiraimikiko.github.io/ within about a minute.

You can also trigger a deploy manually (the workflow declares `workflow_dispatch`) from the **Actions** tab, or via the GitHub CLI:

```bash
gh workflow run "Deploy to GitHub Pages"
```

Notes:

- Pages source is **GitHub Actions** (Settings → Pages → Source). Do not switch it back to a branch ("legacy"), or the raw source will be served instead of the Astro build.
- No `base` path is configured because this is a user site (`shiraimikiko.github.io`, served at the domain root). If you ever move the project to a differently named repo, set `base: "/<repo>/"` in `astro.config.mjs`.
