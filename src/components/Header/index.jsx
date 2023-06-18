import React, { useState } from "react";
import css from "./Header.module.scss";
import LinkButton from "../UI/LinkButton";
import classNames from "classnames";

const Header = () => {
  const [isNavbarMenu, setIsNavbarMenu] = useState(false);
  return (
    <header className={css.container}>
      <nav className={classNames("wrapper", css.navbar)}>
        <div className={css.logo}>
          <a href={void(0)}>
            <img src="./img/logo.png" alt="Логотип SpaceX" />
          </a>
        </div>

        <ul
          className={classNames(
            {
              [css.closed]: !isNavbarMenu,
            },
            css.navbarlist
          )}
        >
          <li>
            <LinkButton href={void(0)}>Главная</LinkButton>
          </li>
          <li>
            <LinkButton href={void(0)}>Технология</LinkButton>
          </li>
          <li>
            <LinkButton href={void(0)}>График полётов</LinkButton>
          </li>
          <li>
            <LinkButton href={void(0)}>Гарантии</LinkButton>
          </li>
          <li>
            <LinkButton href={void(0)}>О компаии</LinkButton>
          </li>
          <li>
            <LinkButton href={void(0)}>Контакты</LinkButton>
          </li>
        </ul>
        <div
          className={classNames(
            {
              [css.checked]: isNavbarMenu,
            },
            css.sidebtn
          )}
          onClick={() => {
            setIsNavbarMenu(!isNavbarMenu);
          }}
        >
          <span className={classNames(css.line, css.line1)}></span>
          <span className={classNames(css.line, css.line2)}></span>
          <span className={classNames(css.line, css.line3)}></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
