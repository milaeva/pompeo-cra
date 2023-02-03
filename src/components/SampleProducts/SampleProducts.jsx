import React from 'react';

import styles from './SampleProducts.module.css';

import vase1 from '../../assets/featured-vase1.png';
import vase2 from '../../assets/featured-vase2.png';
import { Link } from 'react-router-dom';

const SampleProducts = () => {
  return (
    <div className={`${styles.sample} container`}>
      <div className={styles.sampleLeft}>
        <img className={styles.vase2} src={vase2} alt="products" />
        <img className={styles.vase1} src={vase1} alt="products" />
      </div>
      <div className={styles.sampleRight}>
        <h2>
          created with love <span className="unique-font">&</span> passion
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum. Duis cursus, mi quis viverra ornare,
          eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <Link className={styles.sampleLink} to={'/shop'}>
          View More Pieces
        </Link>
      </div>
    </div>
  );
};

export default SampleProducts;
