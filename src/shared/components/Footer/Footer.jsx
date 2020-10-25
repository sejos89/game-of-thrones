import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="App-footer container-fluid">
      <ul className="nav w-100 justify-content-around">
        <li className="nav-item">
          <Link to="/characters">
            <a href="">CHARACTERS</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/houses">
            <a href="">HOUSES</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/chronology">
            <a href="">CHRONOLOGY</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
