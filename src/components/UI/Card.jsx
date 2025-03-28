import React, { useState } from "react";
import { checkboxNumbers } from "../../constants";
import Checkbox from "../shared/Checkbox";
import Button from "./Button";
import css from "./Card.module.css";

const Card = () => {
  const [isAllChecked, setIsAllChecked] = useState(false);

  const toggleAllCheckboxHandler = (event) => {
    const checked = event.target.checked;
    setIsAllChecked(checked);
    console.log(checked);
  };

  return (
    <div className={css.card}>
      <div className={css.cardHeading}>
        <label className={css.cardHeadingInputLabel} htmlFor="all-pages">
          All pages
        </label>
        <input
          onChange={toggleAllCheckboxHandler}
          className={css.cardHeadingInput}
          id="all-pages"
          type="checkbox"
        />
      </div>
      <div className={css.itemContainer}>
        {checkboxNumbers.map((checkbox) => (
          <Checkbox
            key={checkbox.id}
            isAllChecked={isAllChecked}
            checkbox={checkbox}
          />
        ))}
      </div>

      <Button />
    </div>
  );
};

export default Card;
