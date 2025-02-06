import { getAllPages } from '../app/page';

const Sitemap = () => {};

export async function getServerSideProps({ res }) {
  const baseUrl = 'https://bilkylive.com';
  const pages = await getAllPages();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          return `
            <url>
              <loc>${baseUrl}${page.path}</loc>
              <lastmod>${page.lastModified}</lastmod>
              <changefreq>daily</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default Sitemap;