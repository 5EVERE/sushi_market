import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = function (props) {
  return <div className={styles.backdrop} onClick={props.cartIsVisibleHandler}></div>;
};
const ModalWindow = function (props) {
  return (
    <div className={styles.modal}>
      <div>{props.children}</div>
    </div>
  );
};
const Modal = function (props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop cartIsVisibleHandler={props.cartIsVisibleHandler}/>, document.getElementById("overlay"))}
      {ReactDOM.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};
export default Modal;
