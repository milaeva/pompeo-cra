import React from 'react';

import { SubHeading } from '..';
import styles from './Crew.module.css';

import Maria from '../../assets/Maria-Monroy.jpeg';
import Dominic from '../../assets/dominic-basket.jpg';
import Eduard from '../../assets/eduard-fisher.jpg';
import { GrFacebookOption, GrGooglePlus, GrTwitter } from 'react-icons/gr';

const Crew = () => {
  return (
    <div className={styles.crew}>
      <div className="container">
        <SubHeading text={'our crew'} />
        <h2>talented artists</h2>
        <div className={styles.artists}>
          <div className={styles.artist}>
            <img className={styles.artistImg} src={Maria} alt="Maira Monroy" />
            <h3 className={styles.artistName}>Maria Monroy</h3>
            <div className={styles.role}>senior designer</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. enim in
              eros elementum
            </p>
            <div className={styles.socials}>
              <div className={styles.socialIcon}>
                <GrFacebookOption className={styles.icon} />
              </div>
              <div className={styles.socialIcon}>
                <GrTwitter className={styles.icon} />
              </div>
              <div className={styles.socialIcon}>
                <GrGooglePlus className={styles.icon} />
              </div>
            </div>
          </div>
          <div className={styles.artist}>
            <img
              className={styles.artistImg}
              src={Dominic}
              alt="Maira Monroy"
            />
            <h3 className={styles.artistName}>Dominic Basket</h3>
            <div className={styles.role}>senior designer</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. enim in
              eros elementum
            </p>
            <div className={styles.socials}>
              <div className={styles.socialIcon}>
                <GrFacebookOption className={styles.icon} />
              </div>
              <div className={styles.socialIcon}>
                <GrTwitter className={styles.icon} />
              </div>
              <div className={styles.socialIcon}>
                <GrGooglePlus className={styles.icon} />
              </div>
            </div>
          </div>
          <div className={styles.artist}>
            <img className={styles.artistImg} src={Eduard} alt="Maira Monroy" />
            <h3 className={styles.artistName}>Eduard Fisher</h3>
            <div className={styles.role}>senior designer</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. enim in
              eros elementum
            </p>
            <div className={styles.socials}>
              <div className={styles.socialIcon}>
                <GrFacebookOption className={styles.icon} />
              </div>
              <div className={styles.socialIcon}>
                <GrTwitter className={styles.icon} />
              </div>
              <div className={styles.socialIcon}>
                <GrGooglePlus className={styles.icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
