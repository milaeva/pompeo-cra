import React from 'react';

import { SubHeading } from '..';

import styles from './NewsUpdate.module.css';
import paperPlane from '../../assets/paper-plane.png';
import { Link } from 'react-router-dom';

const NewsUpdates = () => {
  return (
    <div className={`${styles.newsUpdates} container`}>
      <div className={styles.newsUpdateImg}>
        <img src={paperPlane} alt="paper-plane" />
      </div>
      <SubHeading text={'latest news'} />
      <h3>
        lastest news <span className="unique-font">&</span> news updates
      </h3>
      <form action="#">
        <div className={styles.newsLetter}>
          <input
            className={styles.email}
            type="email"
            placeholder="Enter your email"
            required
          />
          <Link to={'#'} className={styles.formBtn}>
            subscribe
          </Link>
        </div>
        <div className={styles.check}>
          <input type="checkbox" name="newsletter" id="" />
          <span>Sign up for our newsletter</span>
        </div>
      </form>
    </div>
  );
};

export default NewsUpdates;
