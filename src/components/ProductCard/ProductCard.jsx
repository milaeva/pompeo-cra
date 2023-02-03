import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ProductCard.module.css';

const ProductCard = ({ item: { img, title, price, id } }) => {
  return (
    <div className={styles.productCard}>
      <Link to={`/product/${id}`} className={styles.cardImg}>
        <img src={img} alt="product" />
      </Link>
      <div className={styles.productInfo}>
        <Link to={`/product/${id}`} className={styles.productTitle}>
          {title}
        </Link>
        <div className={styles.productPrice}>$ {price} USD</div>
      </div>
    </div>
  );
};

export default ProductCard;
