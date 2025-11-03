import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const articles = await getCollection('articles');
  const publishedArticles = articles
    .filter(article => article.data.status === 'published')
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'Orange United',
    description: 'Parents and Schools. Together. Stay informed on Orange education.',
    site: context.site,
    items: publishedArticles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.date,
      description: article.data.excerpt,
      link: `/articles/${article.slug}/`,
      categories: [article.data.category, ...article.data.tags],
    })),
    customData: `<language>en-us</language>`,
  });
}

