import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CharacterDetail.scss";
import { useHistory, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Header from "../../../../shared/components/Header/Header";

export default function CharacterDetail() {
  const [t, i18n] = useTranslation("global");

  let { name } = useParams();
  const history = useHistory();
  const [item, setItem] = useState({});
  const [house, setHouse] = useState("");

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACK_URL + `characters/${name}`)
      .then((res) => {
        setItem(res.data);
        axios
          .get(process.env.REACT_APP_BACK_URL + `houses/${res.data.house}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.length !== 0) {
              setHouse(res.data[0].logoURL);
            }
          });
      });
  }, []);

  const goBackHandle = () => history.goBack();

  return (
    <>
      <Header goBack={goBackHandle} />
      <div
        className="container make-space make-space--no-footer"
        id="detail-container"
      >
        <div className="character-header row justify-content-center">
          <figure className="header-img">
            <img src={item.image} alt={item.name} />
          </figure>
        </div>
        <p className="header-name mb-5">{item.name}</p>

        <div className="row">
          <div className="col detail-field">
            <h6>{t("characters.house")}</h6>
            {house && (
              <figure className="house-img">
                <img src={house} alt="" />
              </figure>
            )}
          </div>
          <div className="col detail-field">
            <h6>{t("characters.allegiances")}</h6>
            <ul className="list-with-scroll scrollBar">
              {item.allegiances?.map((allegiance) => (
                <li className="detail-list">{allegiance}</li>
              )) ?? "Loading ...."}
            </ul>
          </div>
          <div className="col detail-field">
            <h6>{t("characters.appearances")}</h6>
            <ul className="list-with-scroll scrollBar">
              {item.appearances?.map((appearance) => (
                <li className="detail-list">{appearance}</li>
              ))}
            </ul>
          </div>
          <div className="col detail-field">
            <h6>{t("characters.father")}</h6>
            <p className="detail-list">{item.father}</p>
          </div>
          <div className="col detail-field">
            <h6>{t("characters.siblings")}</h6>
            <ul className="list-with-scroll scrollBar">
              {item.siblings?.map((sibling) => (
                <li className="detail-list">{sibling}</li>
              ))}
            </ul>
          </div>
          <div className="col detail-field">
            <h6>{t("characters.titles")}</h6>
            <ul className="list-with-scroll scrollBar">
              {item.titles &&
                item.titles.map((title) => (
                  <li className="detail-list">{title}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
