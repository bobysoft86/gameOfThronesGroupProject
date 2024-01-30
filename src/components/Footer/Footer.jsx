import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';
export const Footer = () => {
    const { t, i18n } = useTranslation();
  const lngs ={
    en:{nativeName: 'English'},
    es:{nativeName: 'Spanish'}
  }
  
    return (
<>

        <div className="doyasco">

                {/* <button type="submit" onClick={()=> i18.changeLanguage("es")} disabled={i18n.resolvedLanguage === lng}>español</button> */}
                <button onClick={() => i18n.changeLanguage("es")}>ES</button>
                <button onClick={() => i18n.changeLanguage("en")}>EN</button>


        </div>
<div>
<Link to={"/characters"} >{t('characters')}</Link>
<Link to={"/houses"} >{t('houses')}</Link>
<Link to={"/chronology"} >{t('chronology')}</Link>
</div>


</>  )
}

export default Footer;
