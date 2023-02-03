import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

import email from '../../assets/footer-mail.png';
import location from '../../assets/footer-location.png';
import phone from '../../assets/footer-phone.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className={styles.footer}>
        <div className={styles.footerPadding}>
          <div className={`${styles.footerMain} container`}>
            <div className={styles.footerHeader}>
              <Link to={'/'} className={`${styles.brandLogo} link`}>
                pompeo
              </Link>
              <p>
                I have always striven to fix beauty in wood, stone, glass or
                pottery, that has been my creed.
              </p>
            </div>
            <div className={styles.footerBody}>
              <div className={styles.footerContent}>
                <img src={email} alt="mail box" />
                <h3>email</h3>
                <p>pompeopotery@gmail.com</p>
              </div>
              <div className={styles.footerContent}>
                <img src={location} alt="mail box" />
                <h3>find</h3>
                <p>Central Park, Manhattan New York, 1101</p>
              </div>
              <div className={styles.footerContent}>
                <img src={phone} alt="mail box" />
                <h3>call</h3>
                <p>+1 292 345 678</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
