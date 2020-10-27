import React from "react";
import "./Header.scss";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


export default function Header({ onSearch, goBack, charac }) {

  const [t, i18n] = useTranslation("global");

  return (
    <header className="App-header fixed-top container d-flex align-items-center">
      {onSearch && <input id="search-bar" type="text" placeholder={t("header.search")} onChange={onSearch} />}
      {goBack && <button type="button" id="back-button" onClick={goBack}><i className="fa fa-arrow-left fa-2x"></i></button>}
      <ul className="container d-flex justify-content-end align-items-center h-100 m-0">
        {(onSearch || goBack || charac) && <li className="mx-2" id="list-header">
          <Link to="/">
          <a>
            <span className="fa fa-home fa-lg"></span>
          </a>
          </Link>
        </li>}
        <li className="mx-2" id="list-header">
          <button className="flag-button" onClick={() => i18n.changeLanguage("es")}>
            <span className="flag-icon flag-icon-es icon-header"></span>
          </button>
        </li>
        <li className="mx-2" id="list-header">
        <button className="flag-button" onClick={() => i18n.changeLanguage("en")}>
            <span className="flag-icon flag-icon-gb icon-header"></span>
          </button>
        </li>
      </ul>
    </header>
  );
}
