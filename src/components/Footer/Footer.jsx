import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import "../Footer/Footer.css"


export const Footer = () => {
    const { t, i18n } = useTranslation();
  const lngs ={
    en:{nativeName: 'English'},
    es:{nativeName: 'Spanish'}
  }
  
    return (
<>
<div className="indice">
    <Link to={"/characters"} className="botones">{t('characters')}</Link>
    <Link to={"/houses"} className="botones">{t('houses')}</Link>
    <Link to={"/chronology"} className="botones">{t('chronology')}</Link>
</div>
</>  )
}

export default Footer;
