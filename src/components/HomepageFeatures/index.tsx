import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Visualize all of your multimodal data.',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Choose from over 20 out-of-the-box panels to create interactive visualizations in customizable layouts. Stream your multimodal data, and share each layout to collaborate and quickly understand what your robot is doing.
      </>
    ),
  },
  {
    title: 'Interact with your robots and analyze everything.',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Display and control your robots in an interactive 3D scene; share rich visualizations from live and recorded data of your robot’s mission and journey; and analyze everything to better understand how your robots move through the world.
      </>
    ),
  },
  {
    title: 'Customize and extend your workflows.',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Build bespoke panels, convert custom messages, alias topic names, and configure a set of layouts to support your team’s unique development workflows.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
