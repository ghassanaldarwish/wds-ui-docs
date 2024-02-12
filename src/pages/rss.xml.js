import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const componentsImports = import.meta.glob("../components/**/*.{md,mdx}", {
    eager: true,
  });
  const components = Object.values(componentsImports);
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: components.map((comp) => ({
      link: comp.frontmatter.path,
      title: comp.frontmatter.title,
      description: comp.frontmatter.description,
      pubDate: new Date(),
    })),
  });
}
