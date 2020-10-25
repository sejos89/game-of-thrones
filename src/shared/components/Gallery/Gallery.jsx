import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.scss";

export default function Gallery(props) {
  return (
    <div className="row">
      {props.items.map((item, i) => (
        <div className="col-12 col-sm-4 col-md-3 col-lg-2 my-3 px-2" key={i}>
          <div id="frame">
            {!!item.logoURL === false && (
              <Link to={`/characters/${item.name}`}>
                <img src={item.image} alt="got" />
              </Link>
            )}
            {!!item.logoURL === true && (
              <Link to={`/houses/${item.name}`}>
                <img src={item.logoURL} alt="got" />
              </Link>
            )}
          </div>
          {!!item.logoURL === true && <p> {item.name} </p>}
        </div>
      ))}
    </div>
  );
}
