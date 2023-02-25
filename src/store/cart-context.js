import React, { useReducer } from "react";
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = function (prevState, action) {
  if (action.type === "ADD") {
    let updateItem;
    let updateItems;
    const updateTotalItems = +(
      prevState.totalAmount +
      action.item.price * action.item.amount
    ).toFixed(2);
    const cartItemIndex = prevState.items.findIndex(
      (item) => item.id === action.item.id
    );
    const cartItem = prevState.items[cartItemIndex];
    if (cartItem) {
      updateItem = {
        ...cartItem,
        amount: cartItem.amount + action.item.amount,
      };
      updateItems = [...prevState.items];
      updateItems[cartItemIndex] = updateItem;
    } else {
      updateItem = {
        ...action.item,
      };
      updateItems = [...prevState.items, updateItem];
    }

    return {
      items: updateItems,
      totalAmount: updateTotalItems,
    };
  }
  if (action.type === "REMOVE") {
    let updateItem;
    let updateItems;

    const cartItemIndex = prevState.items.findIndex(
      (item) => item.id === action.id
    );
    const cartItem = prevState.items[cartItemIndex];
    const updateTotalItems = +(prevState.totalAmount - cartItem.price).toFixed(
      2
    );
    if (cartItem.amount === 1) {
      updateItems = prevState.items.filter((item) => item.id !== action.id);
    } else {
      updateItem = {
        ...cartItem,
        amount: cartItem.amount - 1,
      };
      updateItems = [...prevState.items];
      updateItems[cartItemIndex] = updateItem;
    }

    return {
      items: updateItems,
      totalAmount: updateTotalItems,
    };
  }
  return defaultCartState;
};

export const CartContextProvider = function (props) {
  const [cartState, cartStateReducer] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemHandler = function (item) {
    cartStateReducer({
      type: "ADD",
      item: item,
    });
  };
  const removeItemHandler = function (id) {
    cartStateReducer({
      type: "REMOVE",
      id: id,
    });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContext;
