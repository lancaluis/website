import { FaEthereum } from "react-icons/fa";
import packageJson from "/package.json";

import { useBreakPoints } from "../../hooks/useMediaQuery";
import "./style.css";

export const Footer = () => {
  const CRIPTO_ADDRESS = "0x3445c0429913D494eC7A388957E257E7D044ddef";
  const { sm } = useBreakPoints();

  return (
    <div className="footer-container">
      <div className="footer-container-content">
        {!sm ? <p>v{packageJson.version}</p> : null}
        <p>2018 - 2024 &copy; Developed in South America</p>
        {!sm ? <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} onClick={() => {
          navigator.clipboard.writeText(CRIPTO_ADDRESS);
        }} ><FaEthereum className="footer-container-cripto-icon" />
          0x344...</div> : null}
      </div>
    </div>
  );
};
