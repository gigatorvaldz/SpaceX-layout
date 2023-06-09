import React from "react";
import css from "./LinkButton.module.scss";
const LinkButton = ({ children, href }) => {
  return (
    <a href={href} className={css.container}>
      <h3>{children}</h3>
    </a>
  );
};

export default LinkButton;
