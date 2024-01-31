import { useEffect, useState } from "react";
import "./Character.css";
import { useParams } from "react-router-dom";

const baseUrl = "http://localhost:3001";

export const Character = () => {
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
        }
        finally {
          setLoading(false);
        }
        
      };
      getCharactersId();
  }
  , [id]);


  return (
    <div>
      {loading ? (
        <p>loading</p>
      ) : (
        <div className="general">
          {console.log(character)}
          <div className="character">
            <img
              className="imagen"
              src={`../../..${character.image}`}
              alt={character.name}
            />
            <p>{character.name}</p>
          </div>
          <div className="informacion">
            <div className="casa">
              <h3>House</h3>
            </div>
            <div className="alianzas">
              <h3>Alianzas</h3>
              {console.log(character.alliances)}
              {character.alliances.map((alliance, index) => (
                <p className="palianzas" key={index}>
                  {alliance}
                </p>
              ))}
            </div>
            <div className="apariciones">
              <h3>Apariciones</h3>
              <p>{character.episodes}</p>
            </div>
            {}
            <div className="padres">
              <h3>Padres</h3>
              <p>{character.parents}</p>
            </div>
            <div className="hijos">
              <h3>Descendientes</h3>
              <p>{character.siblings}</p>
            </div>
            <div className="titulos">
              <h3>Titulos</h3>
              <p>{character.titles}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
