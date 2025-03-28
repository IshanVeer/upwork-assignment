import React from "react";
import { checkboxNumbers } from "../../constants";
import Checkbox from "../shared/Checkbox";
import Button from "./Button";
import css from "./Card.module.css";

const Card = () => {
  return (
    <div className={css.card}>
      <div className={css.cardHeading}>
        <lable htmlFor="all-pages">All pages</lable>
        <input
          className={css.cardHeadingInput}
          id="all-pages"
          type="checkbox"
        />
      </div>
      <div className={css.itemContainer}>
        {checkboxNumbers.map((checkbox) => (
          <Checkbox key={checkbox.id} checkbox={checkbox} />
        ))}
      </div>

      <Button />
    </div>
  );
};

export default Card;
