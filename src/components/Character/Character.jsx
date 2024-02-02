import { useContext, useEffect, useState } from "react";
import "./Character.css";
import { Link, useParams } from "react-router-dom";
import Nav from "../Nav/Nav";
import { apiCallContext } from "../../Context/Context";

const baseUrl = "http://localhost:3001";

export const Character = () => {

  const { houses} = useContext(apiCallContext);
   console.log("soy houses en character",houses);
  const [character, setCharacter] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getCharactersId = async () => {
      try {
        const charactersApi = await fetch(`${baseUrl}/characters/${id}`);
        const characterJson = await charactersApi.json();
        setCharacter(characterJson);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getCharactersId();
  }, [id]);

  
const imagenCasa= houses.filter((house)=> house.name === character.house);



  return (
    <div>
      {loading ? (
        <p>loading</p>
      ) : (
        <div className="general">

        <div className="nav_character_container">
          <div className="nav_character_container_left">
            <Link to = {"/characters"}><img className="flecha" src="../../../images/nav_images/flecha.png" alt="spain-flag"></img></Link>
            <Link to = {"/characters"} className="volver"><p>Volver</p></Link>
          </div>
          <div className="nav_character_container_right">
            <div className="home">
            <Link to = {"/"}><img className="casa" src="../../../images/nav_images/casa.png" alt="spain-flag"></img></Link>
            </div>
            <div className="languages">
            <Nav />
            </div>
          </div>
        </div>
        

            <div className="principal">
              <div className="character">
              <img
                className="imagen"
                src={`../../..${character.image}`}
                alt={character.name}/>
              <h3>{character.name}</h3>
            </div>
          </div>
          <div className="informacion">
            <div className="data">
              <h3>House</h3>
              <img src={`../../..${imagenCasa[0].image}`} alt="" />
            </div>
            <div className="data">
              <h3>Alianzas</h3>
              {character.alliances.map((alliance, index) => (
                <p className="palianzas" key={index}>
                  {alliance}
                </p>
              ))}
            </div>
            <div className="data">
              <h3>Apariciones</h3>
              {character.episodes.map((episode, index) => (
                <p className="papariciones" key={index}>
                  {episode}
                </p>
              ))}
            </div>
            <div className="data">
              <h3>Padres</h3>
              {character.parents.map((parent, index) => (
                <p className="papadres" key={index}>
                  {parent}
                </p>
              ))}
            </div>
            <div className="data">
              <h3>Descendientes</h3>
              {character.siblings.map((sibling, index) => (
                <p className="pahijos" key={index}>
                  {sibling}
                </p>
              ))}
            </div>
            <div className="data">
              <h3>Titulos</h3>
              <div className="scroll">
              {character.titles.map((title, index) => (
                <p className="patitulos" key={index}>
                  {title}
                </p>
              ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
