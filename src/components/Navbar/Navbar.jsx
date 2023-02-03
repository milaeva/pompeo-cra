import React, { useContext, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';
import { BiCartAlt } from 'react-icons/bi';
import { GrClose, GrMenu } from 'react-icons/gr';
import { storeContext } from '../../context';

const Navbar = () => {
  const { mobileNavOpen, handleMobileNav, handleCartBar } =
    useContext(storeContext);

  const navRef = useRef();

  const mobileNavStyles = mobileNavOpen ? styles.openNav : '';

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? '#ac1313' : '',
    };
  };

  // useEffect(() =>
  //   cartBarOpen ? (document.documentElement.style.overflowY = 'hidden') : null
  // );

  // useEffect(() => {
  //   const handler = (event) => {
  //     if (!navRef.current.contains(event.target) && mobileNavOpen)
  //       handleMobileNav();
  //   };

  //   document.addEventListener('mousedown', handler);
  //   return () => {
  //     document.removeEventListener('mousedown', handler);
  //   };
  // });

  // function preventScroll() {
  //   return (document.documentElement.style.overflowY = 'hidden');
  // }

  return (
    <div className="navbar" ref={navRef}>
      <header className={styles.header}>
        <div className={`${styles.headerContent} container`}>
          <Link to={'/'} className={`${styles.brandLogo} link`}>
            pompeo
          </Link>

          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <NavLink
                  to={'/'}
                  className={styles.navItem}
                  style={navLinkStyles}
                >
                  home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/about'}
                  className={styles.navItem}
                  style={navLinkStyles}
                >
                  about
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/shop'}
                  className={styles.navItem}
                  style={navLinkStyles}
                >
                  shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/contact'}
                  className={styles.navItem}
                  style={navLinkStyles}
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className={styles.canu}>
            <div
              className={styles.cart}
              onClick={() => {
                handleCartBar();
                // preventScroll();
              }}
            >
              <BiCartAlt className={styles.cartIcon} />
              <div className={styles.cartText}>Cart</div>
            </div>

            <div className={styles.mobileMenu}>
              {mobileNavOpen ? (
                <GrClose
                  className={styles.closeMenu}
                  onClick={handleMobileNav}
                />
              ) : (
                <GrMenu className={styles.openMenu} onClick={handleMobileNav} />
              )}
            </div>
          </div>
        </div>
      </header>

      <div className={`${styles.mobileNav} ${mobileNavStyles}`}>
        <NavLink
          to={'/'}
          className={styles.mobileNavItem}
          style={navLinkStyles}
        >
          home
        </NavLink>
        <NavLink
          to={'/about'}
          className={styles.mobileNavItem}
          style={navLinkStyles}
        >
          about
        </NavLink>
        <NavLink
          to={'/shop'}
          className={styles.mobileNavItem}
          style={navLinkStyles}
        >
          shop
        </NavLink>
        <NavLink
          to={'/contact'}
          className={styles.mobileNavItem}
          style={navLinkStyles}
        >
          contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
