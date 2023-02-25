import React, { useRef } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../UI/Input";
const MealItemForm = function (props) {
  const amountInputRef = useRef();

  const submitHandler = function (e) {
    e.preventDefault();
    const inputAmount = amountInputRef.current.value;
    props.onAddToCart(+inputAmount);
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Input
        ref={amountInputRef}
        label="Кількість"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Добавиити</button>
    </form>
  );
};
export default MealItemForm;
