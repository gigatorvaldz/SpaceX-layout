import React from "react";
import css from "./Button.module.scss"
const Button = ({ children }) => {
  return (
    <div className={css.container}>
      <p>{children}</p>
    </div>
  );
};

export default Button;
