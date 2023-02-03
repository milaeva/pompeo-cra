import React from 'react';
import { SubHeading } from '..';

import vase from '../../assets/vase.png';
import mug from '../../assets/mug.png';
import plate from '../../assets/plate.png';

import styles from './ProductCategory.module.css';
import { Link } from 'react-router-dom';

const ProductCatergory = () => {
  return (
    <div className="container">
      <div className={styles.productCategory}>
        <SubHeading text={'product categories'} />
        <h1 className={styles.title}>
          Porcelain
          <span className="unique-font"> &</span>
          Pottery
        </h1>
        <div className={styles.figures}>
          <Link to={'/category/vase'} className={styles.vase}>
            <img src={vase} alt="vase" />
            <h3 className={styles.text}>vases</h3>
          </Link>
          <Link to={'/category/mug'} className={styles.mug}>
            <img src={mug} alt="mug" />
            <h3 className={styles.text}>mugs</h3>
          </Link>
          <Link to={'/category/plate'} className={styles.plate}>
            <img src={plate} alt="plate" />
            <h3 className={styles.text}>plates</h3>
          </Link>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoContent}>
          <h2 className={styles.infoHeading}>
            Hand Grafted <br />
            Pottery since 1990
          </h2>
          <p className={styles.infoText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum. Duis cursus, mi quis viverra ornare,
            eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean
            faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem
            vitae risus posuere.
          </p>
        </div>
        <div className={styles.infoContent}>
          <h2 className={styles.infoHeading}>
            We Provide Premium <br />
            Pottery Produts
          </h2>
          <p className={styles.infoText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum. Duis cursus, mi quis viverra ornare,
            eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean
            faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem
            vitae risus posuere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCatergory;
