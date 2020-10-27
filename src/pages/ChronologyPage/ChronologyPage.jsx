import "./ChronologyPage.scss";

import React, { useEffect, useState } from 'react'
import axios from "axios";

import Footer from '../../shared/components/Footer/Footer'
import Header from '../../shared/components/Header/Header'

export default function ChronologyPage() {

    const [characters, setCharacters] = useState([]);

    const [minAge, setMinAge] = useState("");
    const [maxAge, setMaxAge] = useState("");

    const [orderAsc, setOrderAsc] = useState(true);


    useEffect(() => {
        axios.get(process.env.REACT_APP_BACK_URL + "characters").then((res) => {
        //   con el item.age?.age elimina todos los item.age en caso de que sean false, y si no entra en item.age.age y mira si son false
          const charactersAge = res.data.filter(item => !!item.age?.age);
          setCharacters(charactersAge);
          console.log(res.data[0])
          setMinAge(charactersAge.reduce((prev, curr) => prev.age.age < curr.age.age ? prev : curr).age.age);
          setMaxAge(charactersAge.reduce((prev, curr) => prev.age.age > curr.age.age ? prev : curr).age.age);
        });
      }, []);


    return (
        <>
            <Header charac={characters}/>
            <div class="container make-space scrollBar">
                <div id="button-container" className="d-flex justify-content-center align-items-end">
                    {/* con el setOrderAsc(!orderAsc) cambiamos el estado de "orderAsc al contrario del actual" */}
                    <button onClick={() => setOrderAsc(!orderAsc)} id="button-age">{ orderAsc ? minAge : maxAge }</button>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column align-items-center">
                        <div id="vl" className="d-flex flex-column align-items-end justify-content-between">
                        {orderAsc ? <span class="arrow up"></span> : <span class="arrow down"></span>}
                        {/* {!orderAsc ? <span class="arrow down"></span> : <span></span>} */}
                        </div>
                        {characters.filter((item, index) => index % 2 === 0).sort((a, b) => orderAsc ? (a.age.age - b.age.age) :  (b.age.age - a.age.age)).map((character, i) => (
                            <div id="cont-1" className="d-flex flex-column align-items-center w-100">
                                <p className="mb-1">{character.age.age}</p>
                                <p className="mb-1">{character.name}</p>
                                <figure id="character-figure">
                                    <img id="character-image" src={character.image} alt=""/>
                                </figure>
                            </div>
                        ))}
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <div id="space-div"></div>
                        {characters.filter((item, index) => index % 2 !== 0).sort((a, b) => orderAsc ? (a.age.age - b.age.age) :  (b.age.age - a.age.age)).map((character, i) => (
                            <div id="cont-2" className="d-flex flex-column align-items-center w-100">
                                <p className="mb-1">{character.age.age}</p>
                                <p className="mb-1">{character.name}</p>
                                <figure id="character-figure">
                                    <img id="character-image" src={character.image} alt=""/>
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
