import React from "react";
import css from "./InfoList.module.scss";
import classNames from "classnames";

const InfoList = ({ items }) => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={classNames(css.first, css.listitem)}>
          <a
            href={void(0)}
            className={classNames(css.inneritem, css["inneritem-first"])}
          >
            <span>мы</span>
            <h2>1</h2>
            <span>на рынке</span>
          </a>
        </li>
        <li className={classNames(css.second, css.listitem)}>
          <a
            href={void(0)}
            className={classNames(css.inneritem, css["inneritem-second"])}
          >
            <span>гарантируем</span>
            <h2>50%</h2>
            <span>безопасность</span>
          </a>
        </li>
        <li className={classNames(css.third, css.listitem)}>
          <a
            href={void(0)}
            className={classNames(css.inneritem, css["inneritem-third"])}
          >
            <span>календарик за</span>
            <h2>2001 <span className={css.smaller}>г.</span></h2>
            <span>в подарок</span>
          </a>
        </li>
        <li className={classNames(css.fourth, css.listitem)}>
          <a
            href={void(0)}
            className={classNames(css.inneritem, css["inneritem-fourth"])}
          >
            <span>путешествие</span>
            <h2>597</h2>
            <span>дней</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default InfoList;
