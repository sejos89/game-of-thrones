import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HouseDetail.scss";
import { useParams } from "react-router-dom";

export default function HouseDetail() {
  let { name } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    axios.get(`https://api.got.show/api/show/houses/${name}`).then((res) => {
      setItem(res.data[0]);
      console.log(res.data);
    });
  }, []);

  console.log(item.logoURL);
  return (
    <div className="container make-space">
      <div className="character-header row justify-content-center">
        <figure className="header-img">
          <img src={item.logoURL} alt={item.name} />
        </figure>
      </div>
      <h4 className="mb-5">{item.name}</h4>

      <div className="row">
        <div className="col">
          <h6>WORDS</h6>
          <p className="detail-list">{item.words}</p>
        </div>
        <div className="col">
          <h6>SEAT</h6>
          <ul>
            {item.seat &&
              item.seat.map((seat) => <li className="detail-list">{seat}</li>)}
          </ul>
        </div>
        <div className="col">
          <h6>REGION</h6>
          <ul>
            {item.region &&
              item.region.map((region) => (
                <li className="detail-list">{region}</li>
              ))}
          </ul>
        </div>
        <div className="col">
          <h6>ALLEGIANCE</h6>
          <ul>
            {item.allegiance &&
              item.allegiance.map((allegiance) => (
                <li className="detail-list">{allegiance}</li>
              ))}
          </ul>
        </div>
        <div className="col">
          <h6>RELIGION</h6>
          <ul>
            {item.religion &&
              item.religion.map((religion) => (
                <li className="detail-list">{religion}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
