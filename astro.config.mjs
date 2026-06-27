// @ts-check
import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const githubPagesBase = process.env.PUBLIC_SITE_BASE ?? '/rubik-cube-enlightenment';

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages ? 'https://sankeyuk.github.io' : 'http://localhost:4321',
  base: isGitHubPages ? githubPagesBase : '/',
});
