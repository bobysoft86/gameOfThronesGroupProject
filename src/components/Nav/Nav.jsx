import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import "../Nav/Nav.css"


export const Footer = () => {
    const { t, i18n } = useTranslation();
  const lngs ={
    en:{nativeName: 'English'},
    es:{nativeName: 'Spanish'}
  }
  
    return (
<>
        <div className="idiomas">
                {/* <button type="submit" onClick={()=> i18.changeLanguage("es")} disabled={i18n.resolvedLanguage === lng}>español</button> */}
                <div >
                <a onClick={() => i18n.changeLanguage("es")}><img className="flags" src="../../../public/spain-flag.webp" alt="spain-flag"></img></a>
                </div>
                <div>
                <a onClick={() => i18n.changeLanguage("en")}><img className="flags" src="../../../public/uk-flag.webp" alt="spain-flag"></img></a>
                </div>
        </div>
</>  )
}

export default Footer;
