import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: '🚀 Quick Start',
    link: '/docs/getting-started/introduction',
    description: (
      <>
        Set up your family command center in 15 minutes. Connect to Cozi and start displaying your calendar and lists.
      </>
    ),
  },
  {
    title: '📅 Cozi Integration',
    link: '/docs/integrations/cozi-calendar',
    description: (
      <>
        Sync your Cozi calendar, shopping lists, and to-do lists directly to your display.
      </>
    ),
  },
  {
    title: '🏡 Family Features',
    link: '/docs/features/layouts',
    description: (
      <>
        Display photos, weather, calendars, meal plans, and more on your family command center.
      </>
    ),
  },
];

function Feature({title, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.feature}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <a href={link} className="button button--secondary button--sm">
          Learn More →
        </a>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
