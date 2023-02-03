import React, { useContext } from 'react';

import {
  GoToTop,
  Hero2,
  NewsUpdates,
  ProductCard,
  SubHeading,
} from '../../components';
import styles from './Shop.module.css';

import { storeContext } from '../../context';

const Shop = () => {
  const { storeProducts } = useContext(storeContext);

  const shopProps = {
    headingText: 'shop',
    bodyText: `The attractions of ceramics lie partly in its contradictions. 
    It is both difficult and easy, with an element beyond our control. 
    It is both extremely fragile and durable. Like 'Sumi' ink painting,
     it does not lend itself to erasures and indecision.`,
  };

  return (
    <div className="content">
      <section className={styles.shop}>
        <Hero2 {...shopProps} />
      </section>

      <section className="p-TopBottom">
        <div className={`${styles.shopText} container`}>
          <SubHeading text={'our online store'} />
          <h2>ceramic collection</h2>
        </div>

        <div className={`${styles.storeProducts} container`}>
          {storeProducts.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      </section>

      <section className="p-TopBottom">
        <NewsUpdates />
      </section>
      <GoToTop />
    </div>
  );
};

export default Shop;
