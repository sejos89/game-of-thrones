import "./ChronologyPage.scss";

import React, { useEffect, useState } from 'react'
import axios from "axios";

import Footer from '../../shared/components/Footer/Footer'
import Header from '../../shared/components/Header/Header'

export default function ChronologyPage() {

    const [characters, setCharacters] = useState([]);

    const [age, setAge] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_BACK_URL + "characters").then((res) => {
        //   setCharacters(res.data.filter(item => item.age !== null).filter(item => item.age.age !== undefined));
        //   setCharacters(res.data.filter(item => !!item.age).filter(item => !!item.age.age));
          setCharacters(res.data.filter(item => !!item.age && !!item.age.age));
          setAge(res.data.filter(item => !!item.age && !!item.age.age).reduce((prev, curr) => prev.age.age < curr.age.age ? prev : curr).age.age);
        });
      }, []);

    return (
        <>
            <Header charac={characters}/>
            <div class="container make-space scrollBar">
                <div id="button-container" className="d-flex justify-content-center align-items-end">
                    {age && <button id="button-age">{age}</button>}
                </div>
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column align-items-center">
                        {characters.filter((item, index) => index % 2 === 0).sort((a, b) => (a.age.age > b.age.age) ? 1 : -1).map((character, i) => (
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
                        {characters.filter((item, index) => index % 2 !== 0).sort((a, b) => (a.age.age > b.age.age) ? 1 : -1).map((character, i) => (
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
