import React from "react";
import "./Header.scss";

export default function Header({ onSearch }) {
  return (
    <header className="App-header fixed-top container-fluid d-flex">
      {onSearch && <input type="text" onChange={onSearch} />}
      <ul className="container d-flex justify-content-end align-items-center h-100">
        <li className="mx-2">
          <a href="">
            <span class="flag-icon flag-icon-es"></span>
          </a>
        </li>
        <li className="mx-2">
          <a href="">
            <span class="flag-icon flag-icon-gb"></span>
          </a>
        </li>
      </ul>
    </header>
  );
}
