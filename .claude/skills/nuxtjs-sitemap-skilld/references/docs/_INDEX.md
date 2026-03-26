---
total: 27
---

# Docs Index

## content/0.getting-started (4)

- [Controlling Web Crawlers](./content/0.getting-started/0.introduction.md): Nuxt Sitemap automatically generates XML sitemaps with zero configuration, including image discovery and i18n support.
- [Nuxt Site Config](./content/0.getting-started/1.installation.md): Want to know why you might need this module? Check out the introduction.
- [Data Sources](./content/0.getting-started/2.data-sources.md): After installing the module, you may wonder: where do the URLs in your sitemap come from?
- [Nuxt SEO Troubleshooting](./content/0.getting-started/3.troubleshooting.md): The best tool for debugging is the Nuxt DevTools integration with Nuxt Sitemap.

## content/1.guides (9)

- [Multi Sitemaps](./content/1.guides/0.dynamic-urls.md): When working with a CMS or external data sources, you may need to generate sitemap URLs dynamically at runtime.
- [Controlling Web Crawlers](./content/1.guides/1.filtering-urls.md): When viewing your sitemap.xml for the first time, you may notice some URLs you don't want to be included.
These URLs are most likely coming from Ap...
- [Sitemap Performance](./content/1.guides/2.multi-sitemaps.md): By default, the module generates a single /sitemap.xml file, which works perfectly for most websites.
- [Customising the UI](./content/1.guides/3.i18n.md): The sitemap module automatically integrates with @nuxtjs/i18n and nuxt-i18n-micro without any extra configuration.
- [Lastmod, Priority, and Changefreq](./content/1.guides/4.content.md): Nuxt Sitemap comes with an integration for Nuxt Content that allows you to configure your sitemap entry straight from your content files directly.
- [Data Sources](./content/1.guides/5.prerendering.md): When prerendering routes using Nuxt through either nuxi generate or using the prerender options, the module
will extract data from the generated HT...
- [Controlling Web Crawlers](./content/1.guides/6.best-practices.md): The lastmod field is used to indicate when a page was last updated. This is used by search engines to determine how often to crawl your site.
- [Controlling Web Crawlers](./content/1.guides/7.submitting-sitemap.md): When going live with a new site and you're looking to get indexed by Google, the best starting point is
to submit your sitemap to Google Search Con...
- [Zero Runtime](./content/1.guides/8.zero-runtime.md): If your sitemap URLs only change when you deploy, you don't need to ship sitemap generation code to production. The zeroRuntime option generates si...

## content/2.advanced (5)

- [Nuxt Prerendering](./content/2.advanced/0.loc-data.md): Changing the <loc>{lang="xml"} entry data can be useful for a variety of reasons, such as changing the changefreq, priority, or lastmod values.
- [Best Practices](./content/2.advanced/1.images-videos.md): The image, video and news namespaces is added to your sitemap by default, allowing you to configure
images, videos and news for your sitemap entries.
- [Nuxt Site Config](./content/2.advanced/2.performance.md): For apps with 100k+ pages, generating a sitemap can be a slow process. As robots will request your sitemap frequently, it's important to keep it fast.
- [Data Sources](./content/2.advanced/3.chunking-sources.md): When dealing with large datasets, sitemap sources can be chunked into multiple files to:
- [Config Reference](./content/2.advanced/4.customising-ui.md): What you're looking at when you view the sitemap.xml is a XSL file, think of it just like you would a CSS file for HTML.

## content/4.api (2)

- [Config](./content/4.api/0.config.md): Whether to generate the sitemap.
- [Nuxt Hooks](./content/4.api/1.nuxt-hooks.md): Type: (ctx: { options: ModuleRuntimeConfig, sitemaps: { name: string, readonly content: string }[] }) => void | Promise<void>{lang="ts"}

## content/5.nitro-api (1)

- [Multi Sitemaps](./content/5.nitro-api/nitro-hooks.md): Nitro hooks can be added to modify the output of your sitemaps at runtime.

## content/5.releases (6)

- [Nuxt Sitemap v8.0.0](./content/5.releases/3.v8.md): The v8 release focuses on a fully rewritten devtools experience and several quality of life improvements for Nuxt Content v3 and i18n users.
- [Nuxt Sitemap v7.0.0](./content/5.releases/4.v7.md): The v7 major of Nuxt Sitemap is a simple release to remove deprecations and add support for the Nuxt SEO v2 stable.
- [Nuxt Sitemap v6.0.0](./content/5.releases/5.v6.md): The v6 represents hopefully the last major that the module will undergo. It brings many underlying
logic improvements which aim to solve stability ...
- [Nuxt Sitemap v5.0.0](./content/5.releases/6.v5.md): This module is now the official Sitemap module for Nuxt. To properly
reflect this, the package has been renamed to @nuxtjs/sitemap from nuxt-simple...
- [Nuxt Sitemap v4.0.0](./content/5.releases/7.v4.md): Over the last couple of months I've had many issues reported with similar themes:
- [v3.0.0](./content/5.releases/8.v3.md): Fully supporting i18n sites through the sitemap module has been a long requested feature.
