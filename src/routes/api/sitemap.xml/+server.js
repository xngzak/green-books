import { siteURL } from '$lib/config'
export const prerender = true

export async function GET({ url, fetch }) {
  const posts = await fetch(`${url.origin}/api/posts.json`).then(data => data.json())

  return new Response(`<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      <url>
        <loc>https://xiang.jp/</loc>
        <priority>1.0</priority>
      </url>

      <url>
        <loc>https://xiang.jp/blog</loc>
        <priority>1.0</priority>
      </url>

      <url>
        <loc>https://xiang.jp/about</loc>
        <priority>1.0</priority>
      </url>

      <url>
        <loc>https://xiang.jp/contact</loc>
        <priority>1.0</priority>
      </url>
    ${posts.map((post) =>
    `
      <url>
        <loc>https://${siteURL}/blog/${post.slug}</loc>
          <lastmod>
            ${post.updated
      ? new Date(post.updated).toISOString()
      : new Date(post.date).toISOString()
    }
          </lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      `
  ).join('')}
    </urlset>`.trim(), {
    headers: {
      'Content-Type': 'application/xml'
    }
  }
  );
}
