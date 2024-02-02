import { useContext } from "react";
import { apiCallContext } from "../../Context/Context";

import { useTranslation } from "react-i18next";
import SimpleBar from "simplebar-react";
import Nav from "../Nav/Nav";
import "./Chronology.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

export const Chronology = () => {
  const { t, i18n } = useTranslation();
  const lngs = {
    en: { nativeName: "English" },
    es: { nativeName: "Spanish" },
  };
  const { sortedCharacters, setSortedCharacters } = useContext(apiCallContext);

  const reverse = () => {
    const reversedArray = [...sortedCharacters].reverse();
    setSortedCharacters(reversedArray);
  };

  return (
    <div>
      <>
        <div className="chronology_nav">
          <div className="home_icon_chronology">
            <Link to={"/"}>
              <img className="casa" src="../../../images/nav_images/casa.png" alt="casa"></img>
            </Link>
          </div>
          <div>
            <Nav></Nav>
          </div>
        </div>
        <div className="wallpaper">
          <div className="master_center">
            <div className="center_line">
              <div className="number">
                <h1 onClick={() => reverse()}>{!sortedCharacters[0].age ? 0 : sortedCharacters[0].age}</h1>
              </div>
              <div className="white_line"></div>
            </div>
            <div className="chronology_line">
              {sortedCharacters.map((character, index) => (
                <div className="chronology_data" key={index} style={index % 2 === 0 ? { marginLeft: "100%" } : { marginRight: "100%" }}>
                  <div className="medal">
                    <p className="edad">{character.age}</p>
                    <p className="nombre">{character.name}</p>
                    <div className="imagen_redonda">
                      <img className="imgcharacter" src={`../../..${character.image}`} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Footer></Footer>
        </div>
      </>
    </div>
  );
};

export default Chronology;
