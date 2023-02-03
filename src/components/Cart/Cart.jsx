import React, { useContext, useEffect, useRef } from 'react';
import { GrClose } from 'react-icons/gr';
import { CartItem } from '..';
import { storeContext } from '../../context';

import styles from './Cart.module.css';

const Cart = () => {
  const { handleCartBar, cartBarOpen, cart, subTotal } =
    useContext(storeContext);

  const cartRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!cartRef.current.contains(event.target) && cartBarOpen)
        handleCartBar();
      // enableScroll();
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  // useEffect(() =>
  //   !cartBarOpen
  //     ? (document.documentElement.style.overflowY = 'scroll')
  //     : (document.documentElement.style.overflowY = 'hidden')
  // );

  // function enableScroll() {
  //   return (document.documentElement.style.overflowY = 'scroll');
  // }

  const cartBarStyles = cartBarOpen ? styles.openCartBar : '';

  return (
    <div className={`${styles.cartWrapper} ${cartBarStyles}`}>
      <div ref={cartRef} className={` ${styles.cart} `}>
        <div className={styles.cartHeader}>
          <h2>Your cart</h2>
          <GrClose
            className={styles.closeMenu}
            onClick={() => {
              handleCartBar();
              // enableScroll();
            }}
          />
        </div>

        {cart.length === 0 ? (
          <div className={styles.cartEmpty}>
            <p>your cart is empty</p>
          </div>
        ) : (
          <>
            <div className={styles.cartItems}>
              {cart.map((product) => (
                <CartItem product={product} key={product.id} />
              ))}
            </div>

            <div className={styles.cartTotal}>
              <div className={styles.subTotal}>
                <p>Subtotal</p>
                <div className={styles.productPrice}>
                  $ {subTotal ? subTotal : 0.0} USD
                </div>
              </div>
              <div className={styles.btn}>
                <button>continue to checkout</button>
              </div>
            </div>
          </>
        )}
      </div>

      <div className={` ${styles.overlay}  `}></div>
    </div>
  );
};

export default Cart;
