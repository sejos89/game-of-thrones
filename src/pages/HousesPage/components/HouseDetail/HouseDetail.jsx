import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HouseDetail.scss";
import { useHistory, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Header from "../../../../shared/components/Header/Header";

export default function HouseDetail() {

  const [t, i18n] = useTranslation("global");

  let { name } = useParams();
  const history = useHistory();
  const [item, setItem] = useState({});

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACK_URL + `houses/${name}`).then((res) => {
      setItem(res.data[0]);
      console.log(res.data);
    });
  }, []);

  const goBackHandle = () => history.goBack();

  return (
    <>
      <Header goBack={ goBackHandle }/>
      <div className="container make-space" id="detail-container">
        <div className="character-header row justify-content-center">
          <figure className="header-img">
            <img src={item.logoURL} alt={item.name} />
          </figure>
        </div>
        <h4 className="mb-5">{item.name}</h4>

        <div className="row">
          <div className="col">
            <h6>{t("houses.words")}</h6>
            <p className="detail-list">{item.words}</p>
          </div>
          <div className="col">
            <h6>{t("houses.seat")}</h6>
            <ul className="list-with-scroll">
              {/* es lo mismo "item.seat && item.seat.map" que poner "item.seat?.map" */}
              {item.seat?.map((seat) => <li className="detail-list">{seat}</li>)}
            </ul>
          </div>
          <div className="col">
            <h6>{t("houses.region")}</h6>
            <ul className="list-with-scroll">
              {item.region?.map((region) => (
                  <li className="detail-list">{region}</li>
                ))}
            </ul>
          </div>
          <div className="col">
            <h6>{t("houses.allegiances")}</h6>
            <ul className="list-with-scroll">
              {item.allegiance?.map((allegiance) => (
                  <li className="detail-list">{allegiance}</li>
                ))}
            </ul>
          </div>
          <div className="col">
            <h6>{t("houses.religion")}</h6>
            <ul className="list-with-scroll">
              {item.religion?.map((religion) => (
                  <li className="detail-list">{religion}</li>
                ))}
            </ul>
          </div>
          <div className="col">
            <h6>{t("houses.created")}</h6>
            {<p className="detail-list">{item.createdAt?.slice(0, 10)}</p>}
          </div>
        </div>
      </div>
    </>
  );
}
