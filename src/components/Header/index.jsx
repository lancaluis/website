import { LanguageSelector } from "../Languages";

import { Navbar } from "../Navbar";
import { Toggle } from "../Toggle";

import "./style.css";

export const Header = () => {
  return (
    <header className="header-container">
      <p>Luís Lança</p>
      <div className="header-container-tools">
        <Navbar />
        <LanguageSelector />
        <Toggle />
      </div>
    </header>
  );
};
