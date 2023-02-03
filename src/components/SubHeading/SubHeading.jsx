import React from 'react';

import styles from './SubHeading.module.css';

const SubHeading = ({ text }) => {
  return <div className={styles.subHeading}>{text}</div>;
};

export default SubHeading;
