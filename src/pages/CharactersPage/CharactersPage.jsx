import React, { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "../../shared/components/Gallery/Gallery";
import Footer from "../../shared/components/Footer/Footer";
import Header from "../../shared/components/Header/Header";

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACK_URL + "characters").then((res) => {
      // setFilteredAmiibos(res.data.amiibo);
      setCharacters(res.data);
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
          // items={characters.filter((character) =>
          //   character.name.toLowerCase().includes(filter.toLowerCase())
          // )}
          items={characters.filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
          )}
        />
      </div>
      <Footer />
    </>
  );
}
