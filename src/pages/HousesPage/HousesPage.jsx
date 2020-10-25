import React, { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "../../shared/components/Gallery/Gallery";
import Footer from "../../shared/components/Footer/Footer";

export default function HousesPage() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    axios.get("https://api.got.show/api/show/houses").then((res) => {
      // setFilteredAmiibos(res.data.amiibo);
      setHouses(res.data);
    });
  }, []);

  return (
    <>
      <div class="container make-space">
        <Gallery items={houses} />
      </div>
      <Footer />
    </>
  );
}
