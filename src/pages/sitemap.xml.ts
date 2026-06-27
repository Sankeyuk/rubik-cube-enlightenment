import { getCollection } from "astro:content";
import { absoluteSiteUrl, routeSeo } from "../data/seo";

function urlEntry(path: string): string {
  return [
    "  <url>",
    `    <loc>${absoluteSiteUrl(path)}</loc>`,
    "  </url>",
  ].join("\n");
}

export async function GET() {
  const levels = await getCollection("levels");
  const stories = await getCollection("stories");

  const staticRoutes = Object.values(routeSeo).map((entry) => entry.canonicalPath);
  const levelRoutes = levels.map((level) => `/levels/${level.data.slug}`);
  const storyRoutes = stories.map((story) => `/story/${story.data.slug}`);
  const routes = Array.from(new Set([...staticRoutes, "/levels/intro", ...levelRoutes, ...storyRoutes]));

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    routes.map(urlEntry).join("\n"),
    "</urlset>",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
