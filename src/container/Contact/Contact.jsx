import React from 'react';

import { GoToTop, Hero2, SubHeading } from '../../components';
import errorIcon from '../../assets/icon_error.png';

import styles from './Contact.module.css';

const Contact = () => {
  const contactProps = {
    headingText: 'contact us',
    bodyText: `The attractions of ceramics lie partly in its contradictions. 
    It is both difficult and easy, with an element beyond our control. 
    It is both extremely fragile and durable. Like 'Sumi' ink painting,
     it does not lend itself to erasures and indecision.`,
  };

  return (
    <div className="content">
      <section className={styles.contact}>
        <Hero2 {...contactProps} />
      </section>

      <section className={styles.contactUs}>
        <div className="container">
          <div className={styles.top}>
            <SubHeading text={'contact us'} />
            <h2>Lets get in touch</h2>
            <div className={styles.info}>
              <div className={styles.infoContent}>
                <div>phone</div>
                <p>+1 929 234 5678</p>
              </div>
              <div className={styles.infoContent}>
                <div>location</div>
                <p>2567 Fifth Ave, New York City, NY 20035, USA</p>
              </div>
              <div className={styles.infoContent}>
                <div>email</div>
                <p>pompoe@pottery1990.com</p>
              </div>
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles.headerBg}></div>

            <div className={styles.body}>
              <div className={styles.bodyLeft}>
                <div className={styles.content}>
                  <img src={errorIcon} alt="error icon" />
                  <div>Oops! Something went wrong.</div>
                  <p>
                    This page didn't load Google Maps correctly. See the
                    JavaScript console for technical details.
                  </p>
                </div>
              </div>

              <div className={styles.bodyRight}>
                <h2>Drop Us a Line</h2>
                <form className={styles.form} action="#">
                  <div className={styles.name}>
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      name="name"
                      id="name"
                      required
                    />
                  </div>

                  <div className={styles.email}>
                    <label htmlFor="email"> Email Address:</label>
                    <input
                      type="email"
                      placeholder="Your email"
                      name="email"
                      id="email"
                      required
                    />
                  </div>

                  <div className={styles.textarea}>
                    <label htmlFor="message">Message:</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="53"
                      rows="10"
                      placeholder="How can we help"
                    ></textarea>
                  </div>
                </form>
                <button className={styles.btn}>sent message</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GoToTop />
    </div>
  );
};

export default Contact;
