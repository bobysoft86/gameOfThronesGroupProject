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
                
                <a onClick={() => i18n.changeLanguage("es")}><img className="spain_flag" src="../../../spain-flag.webp" alt="spain-flag"></img></a>
              
                <a onClick={() => i18n.changeLanguage("en")}><img className="uk_flag" src="../../../uk-flag.webp" alt="spain-flag"></img></a>
        </div>
</>  )
}

export default Footer;
