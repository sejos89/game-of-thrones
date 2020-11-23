import React, { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "../../shared/components/Gallery/Gallery";
import Footer from "../../shared/components/Footer/Footer";
import Header from "../../shared/components/Header/Header";

export default function HousesPage() {
  const [houses, setHouses] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACK_URL + "houses").then((res) => {
      const filtered_houses = res.data.filter((x) => x.logoURL);
      setHouses(filtered_houses);
    });
  }, []);

  const handleOnSearch = (match) => {
    setFilter(match.currentTarget.value);
  };

  return (
    <>
      <Header onSearch={handleOnSearch} />
      <div class="container make-space scrollBar">
        <Gallery
          items={houses.filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
          )}
        />
      </div>
      <Footer />
    </>
  );
}
