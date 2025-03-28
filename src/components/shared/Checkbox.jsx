import React from "react";
import css from "./Checkbox.module.css";

const Checkbox = ({ checkbox }) => {
  return (
    <div className={css.checkboxContainer}>
      <label htmlFor={checkbox.id}>{checkbox.label}</label>
      <input className={css.checkboxInput} id={checkbox.id} type="checkbox" />
    </div>
  );
};

export default Checkbox;
