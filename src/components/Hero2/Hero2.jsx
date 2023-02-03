import React from 'react';

import styles from './Hero2.module.css';

const Hero2 = ({ headingText, bodyText }) => {
  return (
    <>
      <div>
        <div className={`${styles.heroContent} container`}>
          <h1>{headingText}</h1>
          <p>{bodyText}</p>
        </div>
      </div>
    </>
  );
};

export default Hero2;
