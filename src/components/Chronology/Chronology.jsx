import { useContext } from "react";
import { apiCallContext } from "../../Context/Context";

import { useTranslation } from 'react-i18next';
import SimpleBar from "simplebar-react"
import Nav from "../Nav/Nav";
import "./Chronology.css";
import Footer from "../Footer/Footer";



export const Chronology = () => {
  const { t, i18n } = useTranslation();
  const lngs ={
    en:{nativeName: 'English'},
    es:{nativeName: 'Spanish'}
  }
  const { sortedCharacters,setSortedCharacters } = useContext(apiCallContext);
  
  const reverse = () => {
    const reversedArray = [...sortedCharacters].reverse();
    setSortedCharacters(reversedArray);
  };

        return (
    <div>
     
        <>
          <Nav></Nav>
          <div className="wallpaper">
            <div>
            <h1 onClick={()=>reverse()}>{ !sortedCharacters[0].age?0:sortedCharacters[0].age}</h1>           
            </div>
            {sortedCharacters.map((character, index) => (
              <div  key={index} style={index % 2 === 0 ? { marginLeft: '30%' } : null}>                                              

                <div className="medal">

                  <p>{character.age}</p>
                  <p>{character.name}</p>
                  <img className="imgcharacter" src={`../../..${character.image}`} alt="" />
                </div>
              </div> 

            ))}
          </div>
        </>
    </div>
  );
};

export default Chronology;
