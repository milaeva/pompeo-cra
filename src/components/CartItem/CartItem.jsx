import React, { useContext, useEffect, useRef, useState } from 'react';

import styles from './CartItem.module.css';

import { storeContext } from '../../context';
//
const CartItem = ({ product: { id, img, title, price, count } }) => {
  const { updateCart, removeCartItem } = useContext(storeContext);
  const [qty, setQty] = useState(count);

  const formRef = useRef();

  useEffect(() => setQty(count), [count]);

  useEffect(() => formRef.current.requestSubmit(), [qty]);

  // useEffect(() => {
  //   updateCart(parseInt(id), parseInt(qty));

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [qty]);

  const handleChange = (event) => {
    const val = event.target.value;
    setQty(val);
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.product}>
        <img className={styles.productImg} src={img} alt="products" />
        <div className={styles.productText}>
          <h2>{title}</h2>
          <div className={styles.productPrice}>$ {price} USD</div>
          <p onClick={() => removeCartItem(parseInt(id))}>remove</p>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            updateCart(parseInt(id), parseInt(qty));
          }}
          ref={formRef}
        >
          <input
            type="number"
            name="quantity"
            id="quantity"
            min={1}
            required
            value={qty}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
};

export default CartItem;
