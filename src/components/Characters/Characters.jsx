import { useContext } from "react";
import { apiCallContext } from "../../Context/Context";
import { Link } from "react-router-dom";

import "./Characters.css";

export const Characters = () => {
  const { characters } = useContext(apiCallContext);
  console.log("soy characters", characters[0].image);

  return (
    <>
    <div className="gallery">

      <div>Characters</div>
    
      {characters.map((character, index) => (
          <div  onClick={() => console.log(character.id)}>
          <Link to={`/characters/${character.id}`} > <img className="characterImage" key={index} src={`../../..${character.image}`}alt="sdf"/></Link>

          <h1>{character.name}</h1>
        </div>
      ))}
    </div>
    </>
  );
};
