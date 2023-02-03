import React, { createContext, useEffect, useState } from 'react';

import { storeProducts } from './data';

export const storeContext = createContext();

export const ProductProvider = (props) => {
  const [state, setState] = useState({
    storeProducts: [...storeProducts],
    mobileNavOpen: false,
    cartBarOpen: false,
    cart: [],
    subTotal: 0,
  });

  console.log(state.cart);

  function handleMobileNav() {
    setState((prevState) => ({
      ...prevState,
      mobileNavOpen: !prevState.mobileNavOpen,
    }));
  }

  function handleCartBar() {
    setState((prevState) => ({
      ...prevState,
      cartBarOpen: !prevState.cartBarOpen,
    }));
  }

  const find = (param, property) => {
    return state.storeProducts.filter((item) => item[property] === param);
  };

  const addToCart = (id, qty) => {
    const addToCartArray = () => {
      product.count = qty;
      product.total = product.price * product.count;
      product.inCart = true;
      setState((prevState) => ({
        ...prevState,
        cart: [...prevState.cart, product],
      }));
      handleCartBar();
    };

    const increment = () => {
      const tempCart = state.cart.map((item) => {
        return item.id === id
          ? {
              ...item,
              count: item.count + qty,
              total: (item.count + qty) * item.price,
            }
          : item;
      });
      setState((prevState) => ({ ...prevState, cart: tempCart }));
      handleCartBar();
    };
    const [product] = find(id, 'id');

    product.inCart ? increment() : addToCartArray();
  };

  const updateCart = (id, qty) => {
    console.log('update');
    const tempCart = state.cart.map((item) => {
      return item.id === id
        ? { ...item, count: qty, total: qty * item.price }
        : item;
    });
    setState((prevState) => ({ ...prevState, cart: tempCart }));
  };

  const removeCartItem = (id) => {
    const [product] = find(id, 'id');
    product.count = 0;
    product.total = 0;
    product.inCart = false;
    const tempCart = state.cart.filter((item) => item.id !== id);

    setState((prevState) => ({ ...prevState, cart: tempCart }));
  };

  const clearCart = () => {
    state.cart.forEach((item) => {
      removeCartItem(item.id);
    });
  };

  useEffect(() => {
    const subTotal = state.cart.reduce(
      (accumulator, currenvalue) => accumulator + currenvalue.total,
      0
    );

    setState((prevState) => ({ ...prevState, subTotal }));
  }, [state.cart]);

  return (
    <storeContext.Provider
      value={{
        ...state,
        handleMobileNav,
        handleCartBar,
        addToCart,
        find,
        updateCart,
        removeCartItem,
        clearCart,
      }}
    >
      {props.children}
    </storeContext.Provider>
  );
};
