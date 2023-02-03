import React from 'react';
import { Button, SubHeading } from '..';

import styles from './Hero.module.css';

import heroImage from '../../assets/hero-img.png';

const Hero = () => {
  const btnProps = {
    text: 'shop collection',
    url: '/shop',
  };
  return (
    <>
      <div className={styles.hero}>
        <div className={`${styles.heroContent} container`}>
          <div className={styles.heroTexts}>
            <SubHeading text={'pompeo pottery'} />
            <h1 className={styles.mainHeroText}>
              Unique Porcelain
              <span className="unique-font"> &</span> <br />
              Stone Collection
            </h1>
            <p className={styles.subHeroText}>
              Unique & modern pottery made by our master in porcelain & stones
            </p>
            <Button {...btnProps} />
          </div>
          <div className={styles.heroImg}>
            <img src={heroImage} alt="vase" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
