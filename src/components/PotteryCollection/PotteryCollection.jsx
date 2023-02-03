import React, { useContext } from 'react';
import { Button, ProductCard, SubHeading } from '..';
import { storeContext } from '../../context';

import styles from './PotteryCollection.module.css';

const PotteryCollection = () => {
  const { find } = useContext(storeContext);

  const potteryCollection = [
    'Decor Plate',
    'Mint Pottery',
    'Set Of Potterys',
    'Orange Ceramic',
    'Dark Bowl',
    'Square Pottery',
  ];

  const collection = potteryCollection.map((title) => {
    const [item] = find(title, 'title');
    return item;
  });
  return (
    <>
      <div className={`${styles.heading} container`}>
        <SubHeading text={'our online store'} />
        <h2>pottery collection</h2>
      </div>
      <div className={`${styles.pCollection} container`}>
        {collection.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
      <div className={`${styles.collectionBtn} container`}>
        <Button text={'view all products'} url={'/shop'} />
      </div>
    </>
  );
};

export default PotteryCollection;
