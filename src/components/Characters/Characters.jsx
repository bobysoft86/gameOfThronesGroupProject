import { useContext, useState } from "react";
import { apiCallContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SimpleBar from "simplebar-react";
import Nav from "../Nav/Nav";
import "./Characters.css";
import Footer from "../Footer/Footer";

export const Characters = () => {
  const { t, i18n } = useTranslation();
  const lngs = {
    en: { nativeName: "English" },
    es: { nativeName: "Spanish" },
  };
  const { characters, setCharacters, setSearch } = useContext(apiCallContext);
  const [inputValue, setInputValue] = useState(null);

  const capitalize = (str) =>
    str
      .split(" ")
      .map(([first, ...rest]) => [first.toUpperCase(), ...rest].join(""))
      .join(" ");

  const capitalizeEachWord = (text) => {
    const words = text.split(" ");
    const wordsCapitalized = words.map((word) => capitalize(word));
    return wordsCapitalized.join(" ");
  };

  const handleInputValue = (ev) => {
    const upper = capitalizeEachWord(ev.target.value);
    console.log(upper);
    setSearch(upper);
  };

  return (
    <div className="soy_todo">
      <div className="nav_characters_container">
        <div className="nav_characters_Left">
          <img src="../../../images/nav_images/lupa.png" className="lupa_characters"></img>
          <form>
            <label>
              <input type="text" onChange={handleInputValue} name="name" className="input_characters" placeholder="Buscar" />
            </label>
          </form>
        </div>
        <div className="nav_characters_Right">
          <div className="home_button">
            <Link to={"/"}>
              <img className="casa_characters" src="../../../images/nav_images/casa.png" alt="casa"></img>
            </Link>
          </div>
          <div className="languages">
            <Nav></Nav>
          </div>
        </div>
      </div>

      <SimpleBar style={{ maxHeight: "70%" }} autoHide={false}>
        <div className="gallery">
          {characters.map((character, index) => (
            <div key={index} className="card" onClick={() => console.log(character.id)}>
              <Link to={`/characters/${character.id}`}>
                {" "}
                <img className="characterImage" key={index} src={`../../..${character.image}`} alt="sdf" />
              </Link>

              <h1 className="chName">{character.name}</h1>
            </div>
          ))}
        </div>
        <Footer></Footer>
      </SimpleBar>
    </div>
  );
};
