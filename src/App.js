import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContext, {CartContextProvider} from "./store/cart-context";
const App = function () {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const cartIsVisibleHandler = function () {
    setCartIsVisible(!cartIsVisible);
  };
  return (
      <CartContextProvider>
      {cartIsVisible && <Cart cartIsVisibleHandler={cartIsVisibleHandler}/>}
      <Header cartIsVisibleHandler={cartIsVisibleHandler}></Header>
      <main>
        <Meals />
      </main>
      </CartContextProvider>
  );
};

export default App;
