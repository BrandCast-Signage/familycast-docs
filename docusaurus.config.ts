import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'FamilyCast Documentation',
  tagline: 'Your family\'s digital display for sharing memories and staying connected',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.familycast.app',
  baseUrl: '/',

  organizationName: 'BrandCast-Signage',
  projectName: 'familycast-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // SEO Metadata, Structured Data, and Canonical URL
  headTags: [
    // Favicon tags
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '48x48',
        href: '/favicon-48x48.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
    },
    // Meta tags
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'FamilyCast, family display, digital photo frame, family calendar, family organization, smart home display',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Complete documentation for FamilyCast - your family\'s digital display for sharing memories and staying connected',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:title',
        content: 'FamilyCast Documentation',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:description',
        content: 'Family organization and communication hub documentation',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:image',
        content: 'https://docs.familycast.app/img/familycast-OG.png',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:title',
        content: 'FamilyCast Documentation',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:description',
        content: 'Complete documentation for FamilyCast digital family display',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image',
        content: 'https://docs.familycast.app/img/familycast-OG.png',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:url',
        content: 'https://docs.familycast.app',
      },
    },
    // Canonical URL
    {
      tagName: 'link',
      attributes: {
        rel: 'canonical',
        href: 'https://docs.familycast.app',
      },
    },
    // Structured data
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'FamilyCast Documentation',
        url: 'https://docs.familycast.app',
        publisher: {
          '@type': 'Organization',
          name: 'FamilyCast',
          logo: 'https://docs.familycast.app/img/logo.png',
        },
        description: 'Family organization and communication hub documentation',
      }),
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Docs at root instead of /docs
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        gtag: {
          trackingID: 'G-8D5XY7NGFN',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/familycast-OG.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'FamilyCast Help',
      logo: {
        alt: 'FamilyCast Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://familycast.app',
          label: 'FamilyCast.app',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/getting-started',
            },
            {
              label: 'Features',
              to: '/features',
            },
            {
              label: 'Integrations',
              to: '/integrations',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'FamilyCast',
              href: 'https://familycast.app',
            },
            {
              label: 'Blog & Updates',
              href: 'https://blog.familycast.app',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Contact Support',
              href: 'https://familycast.app/support',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FamilyCast. All rights reserved.<br/>Build: ${new Date().toISOString()} • ${Date.now().toString(36).toUpperCase()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // Algolia search - to be configured later
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'familycast',
      contextualSearch: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
