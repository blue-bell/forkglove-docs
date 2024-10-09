import type { Options as PluginClientRedirectsOptions } from "@docusaurus/plugin-client-redirects";
import type * as PresetClassic from "@docusaurus/preset-classic";
import { Config } from "@docusaurus/types";
import extensionApiDocsPlugin from "./packages/plugin-extension-api-docs";
import foxgloveSchemasPlugin, {
  generateFoxgloveSchemaRedirects,
} from "./packages/plugin-foxglove-schemas";
import posthogPageviewsPlugin from "./packages/plugin-posthog-pageviews";
import { config as dotenvConfig } from "dotenv";
import { themes } from "prism-react-renderer";
import type { PresetOptions as RedocusaurusPresetOptions } from "redocusaurus";
import "redocusaurus";

dotenvConfig();

export default {
  title: "Forkglove",
  favicon: "img/favicon.ico",
  tagline: "The multimodal data visualization and management platform.",
  // Set the production url of your site here
  url: "https://forkglove.vercel.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  markdown: {
    // Use CommonMark for .md and MDX for .mdx
    format: "detect",
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-CN"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./navigation.js"),
          editUrl: "https://github.com/forkglove/docs/tree/main",
        },
        // theme: {
        //   customCss: require.resolve("./src/css/custom.css"),
        // },
        blog: {
          path: "changelog",
          routeBasePath: "changelog",
          blogTitle: "Changelog",
          blogDescription: "Changelog | Forklove",
          blogSidebarTitle: "Recent releases",
          showReadingTime: false,
          onUntruncatedBlogPosts: "ignore",
        },
      } satisfies PresetClassic.Options,
    ],
    [
      "redocusaurus",
      {
        config: "./api-docs/redocly.yaml",
        specs: [
          {
            spec: "./api-docs/specs/v1.yaml",
            route: "/api/",
          },
        ],
        theme: {
          primaryColor: "#FF585F",
        },
      } satisfies RedocusaurusPresetOptions,
    ],
  ],

  plugins: [
    extensionApiDocsPlugin,
    foxgloveSchemasPlugin,
    process.env.POSTHOG_KEY && [posthogPageviewsPlugin, { apiKey: process.env.POSTHOG_KEY }],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          ...generateFoxgloveSchemaRedirects(),
          { from: "/docs/release-notes", to: "/changelog" },
        ],
      } satisfies PluginClientRedirectsOptions,
    ],
  ].filter(Boolean),

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: undefined,
      logo: {
        alt: "Forkglove",
        src: "img/foxglove-typemark.svg",
        href: "/",
        target: "_self",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Documentation",
        },
        // {
        //   to: "/api",
        //   label: "API Reference",
        //   position: "left",
        // },
        // {
        //   to: "/changelog",
        //   label: "Changelog",
        //   position: "left",
        // },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/forkglove",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Forkglove",
          items: [
            { label: "Docs", to: "/" },
            // { label: "API reference", to: "/api" },
            { label: "Changelog", to: "/changelog" },
          ],
        },
        // {
        //   title: "Community",
        //   items: [
        //     { label: "Slack", href: "https://foxglove.dev/slack" },
        //     { label: "Twitter", href: "https://twitter.com/foxglovedev" },
        //     { label: "GitHub", href: "https://github.com/foxglove" },
        //   ],
        // },
      ],
      copyright: `Copyright © Forkglove`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
      additionalLanguages: ["json"],
    },
    // algolia:
    //   process.env.ALGOLIA_APP_ID && process.env.ALGOLIA_API_KEY
    //     ? {
    //         appId: process.env.ALGOLIA_APP_ID,
    //         apiKey: process.env.ALGOLIA_API_KEY,
    //         indexName: "foxglove-pages",
    //         contextualSearch: true,
    //         searchParameters: {}, // optional
    //         searchPagePath: "search", // optional; false to disable
    //       }
    //     : undefined,
  } satisfies PresetClassic.ThemeConfig,
} satisfies Config;
