import { useBreakPoints } from "../../hooks/useMediaQuery";
import { LanguageSelector } from "../Languages";

import { Navbar } from "../Navbar";
import { Toggle } from "../Toggle";

import "./style.css";

export const Header = () => {
  const { sm } = useBreakPoints();

  return (
    <header style={{ width: "100%" }}>
      <div className="header-container">
        {!sm ? <p>Luís Lança</p> : null}
        <div className="header-container-tools">
          {!sm ? <Navbar /> : null}
          <LanguageSelector />
          <Toggle />
        </div>
      </div>
      {sm ? (
        <div className="mobile-menu">
          <Navbar />
        </div>
      ) : null}
    </header>
  );
};
