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

  url: 'https://help.familycast.app',
  baseUrl: '/',

  organizationName: 'BrandCast-Signage',
  projectName: 'familycast-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

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
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/familycast-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'FamilyCast Help',
      logo: {
        alt: 'FamilyCast Logo',
        src: 'img/logo.svg',
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
      copyright: `Copyright © ${new Date().getFullYear()} FamilyCast. All rights reserved.`,
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
