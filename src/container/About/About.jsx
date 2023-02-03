import React from 'react';
import {
  Crew,
  GoToTop,
  ProductCategory,
  SampleProducts,
} from '../../components';

import Hero2 from '../../components/Hero2/Hero2';

import styles from './About.module.css';

const About = () => {
  const aboutProps = {
    headingText: 'about us',
    bodyText: `The attractions of ceramics lie partly in its contradictions. 
    It is both difficult and easy, with an element beyond our control. 
    It is both extremely fragile and durable. Like 'Sumi' ink painting,
     it does not lend itself to erasures and indecision.`,
  };

  return (
    <div className="content">
      <section className={styles.about}>
        <Hero2 {...aboutProps} />
      </section>

      <section className="p-TopBottom">
        <ProductCategory />
      </section>

      <section className="p-TopBottom">
        <Crew />
      </section>

      <section className="p-TopBottom">
        <SampleProducts />
      </section>
      <GoToTop />
    </div>
  );
};

export default About;
