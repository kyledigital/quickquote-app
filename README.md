## QuickQuote

QuickQuote is a static Next.js 16 site that can be deployed to GitHub Pages.

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## Build for Production

Create the static export with:

```bash
npm run build
```

The generated site will be written to the `out/` folder.

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml` that deploys automatically when you push to the `main` or `master` branch.

After pushing this project to GitHub:

1. Open the repository on GitHub.
2. Go to `Settings` -> `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push or merge to `main` or `master`.
5. Wait for the `Deploy to GitHub Pages` workflow to finish.

If your repository is named something like `quickquote-app`, the site will be available at:

```text
https://YOUR_GITHUB_USERNAME.github.io/quickquote-app/
```

If your repository is a user site named `YOUR_GITHUB_USERNAME.github.io`, it will publish at:

```text
https://YOUR_GITHUB_USERNAME.github.io/
```
