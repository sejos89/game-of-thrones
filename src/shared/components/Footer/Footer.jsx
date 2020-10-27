import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { useTranslation } from "react-i18next";

export default function Footer() {

  const [t, i18n] = useTranslation("global");

  return (
    <footer className="App-footer container-fluid">
      <ul className="nav w-100 justify-content-around">
        <li className="nav-item">
          <Link to="/characters">
            <a href="">{t("footer.characters")}</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/houses">
            <a href="">{t("footer.houses")}</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/chronology">
            <a href="">{t("footer.chronology")}</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
