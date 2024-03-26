import { FaEthereum } from "react-icons/fa";
import packageJson from "/package.json";

import { useBreakPoints } from "../../hooks/useMediaQuery";
import "./style.css";

export const Footer = () => {
  const CRIPTO_ADDRESS = "0x3445c0429913D494eC7A388957E257E7D044ddef";
  const { sm } = useBreakPoints();

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
          <span style={{ display: "flex", alignItems: "flex-start" }}>
            <FaEthereum className="footer-container-cripto-icon" />{" "}
            {CRIPTO_ADDRESS}
          </span>
        </button>
      </div>
      <div className="footer-container-content">
        {!sm ? <p>v{packageJson.version}</p> : null}
        <p>2018 - 2024 &copy; Developed in South America</p>
        {!sm ? <span style={{ width: "30px" }}></span> : null}
      </div>
    </div>
  );
};
