import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = function (props) {
  const context = useContext(CartContext);
  const totalAmount = `$${context.totalAmount}`;
  const addCartItemHandler = function (item) {
    context.addItem({...item, amount: 1});
  };
  const removeCartItemHandler = function (id) {
    context.removeItem(id)
  };
  const cartItems = context.items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onAdd={addCartItemHandler.bind(null, item)}
      onRemove={removeCartItemHandler.bind(null, item.id)}
    />
  ));
  return (
    <Modal cartIsVisibleHandler={props.cartIsVisibleHandler}>
      <ul className={styles["cart-items"]}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Разом</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button
          onClick={props.cartIsVisibleHandler}
          className={styles["button--alt"]}
        >
          Закрити
        </button>
        <button className={styles.button}>Добавити</button>
      </div>
    </Modal>
  );
};
export default Cart;
