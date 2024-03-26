import { FaEthereum } from "react-icons/fa";
import packageJson from "/package.json";

import "./style.css";

export const Footer = () => {
  const CRIPTO_ADDRESS = "0x3445c0429913D494eC7A388957E257E7D044ddef";

  return (
    <div className="footer-container">
      <div className="footer-container-cripto">
        <button
          className="footer-container-cripto-button"
          onClick={() => {
            navigator.clipboard.writeText(CRIPTO_ADDRESS);
          }}
        >
          Sponsor me:&nbsp;
          <FaEthereum className="footer-container-cripto-icon" />{" "}
          {CRIPTO_ADDRESS}
        </button>
      </div>
      <div className="footer-container-content">
        <p>v{packageJson.version}</p>
        <p>2018 - 2024 &copy; Developed in South America</p>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </div>
    </div>
  );
};
