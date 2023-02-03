import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import styles from './FeaturedProducts.module.css';

import vase1 from '../../assets/featured-vase1.png';
import vase2 from '../../assets/featured-vase2.png';

import { storeContext } from '../../context';

const FeaturedProducts = () => {
  const { find } = useContext(storeContext);

  const [goldAndBlack] = find(10, 'id');
  const [OrangeCeramic] = find(5, 'id');

  return (
    <>
      <div className={`${styles.featureProducts} container`}>
        <div className={`${styles.featureImg}`}>
          <img className={styles.featureImg1} src={vase1} alt="vase" />
        </div>
        <div className={`${styles.featureText}`}>
          <h3>Gold & Black Pottery</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim
            veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea
            commodo consequatuisaute.
          </p>
          <Link
            className={styles.featureLink}
            to={`/product/${goldAndBlack.id}`}
          >
            View Details
          </Link>
        </div>

        <div className={`${styles.featureText}  ${styles.featureText2}`}>
          <h3>Orange Ceramic</h3>
          <p>
            Pri cu dico labores officiis, odio principes complectitur ad sea.
            Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid
            definitiones id cum, ad meliore perpetua referrentur sed. Quas
            suscipit ad mea verear vivendo tincidunt.
          </p>
          <Link
            className={styles.featureLink}
            to={`/product/${OrangeCeramic.id}`}
          >
            View Details
          </Link>
        </div>
        <div className={`${styles.featureImg}`}>
          <img className={styles.featureImg2} src={vase2} alt="vase" />
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
