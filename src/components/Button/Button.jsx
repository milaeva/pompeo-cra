import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ text, url }) => {
  return (
    <Link className={styles.btn} to={url}>
      {text}
    </Link>
  );
};

export default Button;
