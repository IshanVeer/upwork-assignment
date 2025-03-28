import React, { useState } from "react";
import css from "./Checkbox.module.css";

const Checkbox = ({ checkbox, isAllChecked }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleIndividualCheckboxHandler = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className={css.checkboxContainer}>
      <label className={css.checkboxInputLabel} htmlFor={checkbox.id}>
        {checkbox.label}
      </label>
      <input
        className={css.checkboxInput}
        checked={isChecked || isAllChecked}
        id={checkbox.id}
        type="checkbox"
        onChange={toggleIndividualCheckboxHandler}
      />
    </div>
  );
};

export default Checkbox;
