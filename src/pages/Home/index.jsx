import { useTranslation } from 'react-i18next';
import user from '../../assets/luislanca.png'
import './style.css'

export const Home = () => {
  const { t } = useTranslation();
  return (
    <div class='user-section'>
      <img src={user} alt="Luís Lança" />
      <h1>{t("PAGES.HOME.TITLE")}</h1>
      <h3>{t("PAGES.HOME.SUBTITLE")}</h3>
      <p>{t("PAGES.HOME.INTRO")}</p>
    </div>
  );
};
