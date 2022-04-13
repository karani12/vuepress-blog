import { path } from "@vuepress/utils";
import type { Theme } from "@vuepress/core";
import type { DefaultThemeOptions } from "@vuepress/theme-default";

const blogTheme: Theme<DefaultThemeOptions> = {
  name: "blog-theme",

  extends: "@vuepress/theme-default",

  layouts: {
    Article: path.resolve(__dirname, "./layouts/ArticlePage.vue"),
  },

  plugins: [
    [
      "blog2",
      {
        filter: ({ filePathRelative }) =>
          filePathRelative && filePathRelative.startsWith("blog/"),
        getInfo: ({ frontmatter, title }) => ({
          title,
          author: frontmatter.author || "",
          date: frontmatter.date || null,
       
        }),
        type: [
          {
            key: "article",
            path: "/blog/",
            layout: "Article",
            frontmatter: () => ({ title: "Articles", sidebar: false, }),
          },
        ],
        hotReload: true,
      },
    ],
  ],
};

export default blogTheme;