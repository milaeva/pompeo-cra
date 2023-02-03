import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
  Button,
  GoToTop,
  Hero2,
  ProductCard,
  SubHeading,
} from '../../components';

import styles from './Category.module.css';

import { storeContext } from '../../context';

const Category = () => {
  const { category } = useParams();

  const { find } = useContext(storeContext);

  const products = find(category, 'category');

  const categoryProps = {
    headingText: `${category}s`,
    bodyText: `The attractions of ceramics lie partly in its contradictions. 
    It is both difficult and easy, with an element beyond our control. 
    It is both extremely fragile and durable. Like 'Sumi' ink painting,
     it does not lend itself to erasures and indecision.`,
  };

  return (
    <div className="content">
      <section className={styles.category}>
        <Hero2 {...categoryProps} />
      </section>

      <section className="p-TopBottom">
        <div className={`${styles.categoryText} container`}>
          <SubHeading text={'our online store'} />
          <h2>product collection</h2>
        </div>

        <div className={`${styles.storeProducts} container`}>
          {products &&
            products.map((item) => <ProductCard item={item} key={item.id} />)}
        </div>
        <div className={styles.btn}>
          <Button text={'back to shop'} url={'/shop'} />
        </div>
      </section>
      <GoToTop />
    </div>
  );
};

export default Category;
