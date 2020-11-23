import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.scss";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [t, i18n] = useTranslation("global");
  const location = useLocation();

  return (
    <footer className="App-footer container-fluid">
      <ul className="nav w-100 justify-content-around">
        <li className="nav-item ">
          <Link to="/characters">
            <p
              className={`footer-titles ${
                location.pathname === "/characters" ? "selected-link" : ""
              }`}
            >
              {t("footer.characters")}
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/houses">
            <p
              className={`footer-titles ${
                location.pathname === "/houses" ? "selected-link" : ""
              }`}
            >
              {t("footer.houses")}
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/chronology">
            <p
              className={`footer-titles ${
                location.pathname === "/chronology" ? "selected-link" : ""
              }`}
            >
              {t("footer.chronology")}
            </p>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
