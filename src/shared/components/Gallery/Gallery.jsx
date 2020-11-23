import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.scss";

export default function Gallery(props) {
  return (
    <div className="row">
      {props.items.map((item, i) => (
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 my-3 px-2" key={i}>
          <div className="frame">
            {!item.logoURL && (
              <Link to={`/characters/${item.name}`}>
                {item.image && (
                  <img className="image-gallery" src={item.image} alt="got" />
                )}
                <div className="hover-name">{item.name}</div>
              </Link>
            )}
            {item.logoURL && (
              <Link to={`/houses/${item.name}`}>
                <img src={item.logoURL} alt="got" />
              </Link>
            )}
          </div>
          {item.logoURL && <p> {item.name} </p>}
        </div>
      ))}
    </div>
  );
}
