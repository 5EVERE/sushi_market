import React from "react";
import sushiImage from "../../img/sushi.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = function (props) {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Япона Кухня</h1>
        <HeaderCartButton cartIsVisibleHandler={props.cartIsVisibleHandler}/>
      </header>
      <div className={styles["main-image"]}>
        <img src={sushiImage}></img>
      </div>
    </React.Fragment>
  );
};
export default Header;
