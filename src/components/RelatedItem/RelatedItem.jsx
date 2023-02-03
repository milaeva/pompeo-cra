import React, { useContext } from 'react';
import { ProductCard } from '..';
import { storeContext } from '../../context';

import styles from './RelatedItem.module.css';

const RelatedItem = () => {
  const { find } = useContext(storeContext);

  const potteryCollection = ['Red Plate', 'Mint Bowl', 'Gold & Black Pottery'];

  const collection = potteryCollection.map((title) => {
    const [product] = find(title, 'title');
    return product;
  });

  return (
    <div className="container">
      <div className={styles.text}>related item</div>

      <div className={`${styles.pCollection} `}>
        {collection.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default RelatedItem;
