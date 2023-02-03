import React from 'react';
import { Button, SubHeading } from '..';

import styles from './Shopping.module.css';

const Shopping = () => {
  return (
    <div>
      <div className={styles.shoppingBg}>
        <div className={`${styles.shoppingMain} container`}>
          <SubHeading text={'pompeo pottery'} />
          <h2>Ready to start shopping?</h2>
          <p>
            Lorem ipsum dolor sit amet,
            <span> consectetur adipiscing elit</span>. Suspendisse varius enim
            in eros elementum.
          </p>
          <Button text={'new collection'} url={'#'} />
        </div>
      </div>
    </div>
  );
};

export default Shopping;
