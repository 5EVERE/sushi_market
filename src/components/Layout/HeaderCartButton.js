import React, { useState, useContext, useEffect } from "react";
import CartContext from "../../store/cart-context";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
const HeaderCartButton = function (props) {
  const [visibleBump, setVisibleBump] = useState(false);
  const cartContext = useContext(CartContext);
  const buttonClasses = `${styles.button} ${visibleBump ? styles.bump : ""}`;
  const cartContextNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);
  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setVisibleBump(true);
    const timer = setTimeout(() => {
      setVisibleBump(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);
  return (
    <button onClick={props.cartIsVisibleHandler} className={buttonClasses}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Кошик</span>
      <span className={styles.badge}>{cartContextNumber}</span>
    </button>
  );
};
export default HeaderCartButton;
