import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CharacterDetail.scss";
import { useParams } from "react-router-dom";

export default function CharacterDetail() {
  let { name } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.got.show/api/show/characters/${name}`)
      .then((res) => {
        setItem(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div className="container make-space">
      <div className="character-header row justify-content-center">
        <figure className="header-img">
          <img src={item.image} alt={item.name} />
        </figure>
      </div>
      <h4 className="mb-5">{item.name}</h4>

      <div className="row">
        <div className="col">
          <h6>HOUSE</h6>
          <figure>
            <img src={item.image} alt="" />
          </figure>
        </div>
        <div className="col">
          <h6>ALLEGIANCES</h6>
          <ul className="list-with-scroll">
            {item.allegiances?.map((allegiance) => (
              <li className="detail-list">{allegiance}</li>
            )) ?? "Loading ...."}
          </ul>
        </div>
        <div className="col">
          <h6>APPEARANCES</h6>
          <ul className="list-with-scroll">
            {item.appearances?.map((appearance) => (
              <li className="detail-list">{appearance}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h6>FATHER</h6>
          <p className="detail-list">{item.father}</p>
        </div>
        <div className="col">
          <h6>SIBLINGS</h6>
          <ul className="list-with-scroll">
            {item.siblings?.map((sibling) => (
              <li className="detail-list">{sibling}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h6>TITLES</h6>
          <ul className="list-with-scroll">
            {item.titles &&
              item.titles.map((title) => (
                <li className="detail-list">{title}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
