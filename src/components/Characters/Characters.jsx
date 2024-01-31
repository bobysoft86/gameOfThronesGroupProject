import { useContext } from "react";
import { apiCallContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Nav from "../Nav/Nav";
import "./Characters.css";
import Footer from "../Footer/Footer";



export const Characters = () => {
  const { t, i18n } = useTranslation();
  const lngs ={
    en:{nativeName: 'English'},
    es:{nativeName: 'Spanish'}
  }
  const { characters } = useContext(apiCallContext);
  console.log("soy characters", characters[0].image);

  return (
    <div className="soy_todo">
      
            <div>
            <form>
                <label>
                  Name:
                  <input type="text" name="name" />
                </label>
              </form>
            <Nav></Nav>
            </div>

        <div className="gallery">
    
      {characters.map((character, index) => (
          <div className="card" onClick={() => console.log(character.id)}>
          <Link to={`/characters/${character.id}`} > <img
            className="characterImage"
            key={index}
            src={`../../..${character.image}`}
            alt="sdf"
            /></Link>

          <h1 className="chName">{character.name}</h1> 
        </div>
      ))}
    </div>
        <Footer></Footer>
</div>
  );
};
