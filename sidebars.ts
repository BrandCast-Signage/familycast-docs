import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/introduction',
        'getting-started/quick-start',
        'getting-started/display-setup',
        'getting-started/browser-setup',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/family-calendar',
        'features/photo-sharing',
        'features/family-messages',
        'features/kids-schedules',
        'features/weather-and-info',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrations/photo-slideshow',
        'integrations/ical-calendar',
        'integrations/google-photos',
        'integrations/google-slides',
        'integrations/google-tasks',
        'integrations/cozi-integration',
        'integrations/cozi-lists',
        'integrations/weather',
        'integrations/rss-feeds',
        'integrations/stock-market',
        'integrations/dad-jokes',
      ],
    },
    {
      type: 'category',
      label: 'Family Management',
      items: [
        'family/adding-family-members',
        'family/managing-access',
        'family/kids-safety',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/common-issues',
        'troubleshooting/display-problems',
        'troubleshooting/integration-problems',
      ],
    },
  ],
};

export default sidebars;
