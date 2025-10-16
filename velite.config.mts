// import { defineConfig, s } from "velite";
// import rehypePrettyCode from "rehype-pretty-code";
// import rehypeSlug from "rehype-slug";
// import rehypeAutolinkHeadings from "rehype-autolink-headings";

// export default defineConfig({
//   root: "src/content",
//   output: {
//     data: ".velite",
//     assets: "public/static",
//     base: "/static/",
//     name: "[name]-[hash:6].[ext]",
//     clean: true,
//   },
//   collections: {
//     projects: {
//       name: "Project",
//       pattern: "projects/**/*.mdx",
//       schema: s
//         .object({
//           title: s.string().max(99),
//           slug: s.slug("projects"),
//           description: s.string().max(999),
//           date: s.isodate(),
//           published: s.boolean().default(true),
//           featured: s.boolean().default(false),
//           tags: s.array(s.string()),
//           image: s.image().optional(),
//           github: s.string().url().optional(),
//           demo: s.string().url().optional(),
//           metadata: s.metadata(),
//           excerpt: s.excerpt(),
//           content: s.markdown({
//             rehypePlugins: [
//               rehypeSlug,
//               [rehypePrettyCode, { theme: "github-dark" }],
//               [
//                 rehypeAutolinkHeadings,
//                 {
//                   behavior: "wrap",
//                   properties: {
//                     className: ["anchor"],
//                   },
//                 },
//               ],
//             ],
//           }),
//         })
//         .transform((data) => ({
//           ...data,
//           permalink: `/projects/${data.slug}`,
//         })),
//     },
//   },
// });
import { defineConfig, s } from "velite";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default defineConfig({
  root: "src/content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: {
    projects: {
      name: "Project",
      pattern: "projects/**/*.mdx",
      schema: s
        .object({
          title: s.string().max(99),
          slug: s.slug("projects"),
          description: s.string().max(999),
          date: s.isodate(),
          published: s.boolean().default(true),
          featured: s.boolean().default(false),
          tags: s.array(s.string()),
          image: s.image().optional(),
          github: s.string().url().optional(),
          demo: s.string().url().optional(),
          metadata: s.metadata(),
          excerpt: s.excerpt(),
          content: s.mdx({
            rehypePlugins: [
              rehypeSlug,
              [rehypePrettyCode, { theme: "one-dark-pro" }],
              [
                rehypeAutolinkHeadings,
                {
                  behavior: "wrap",
                  properties: {
                    className: ["anchor"],
                  },
                },
              ],
            ],
          }),
        })
        .transform((data) => ({
          ...data,
          permalink: `/projects/${data.slug}`,
        })),
    },
  },
});
