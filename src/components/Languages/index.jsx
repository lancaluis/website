import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiTranslate as TranslateIcon } from "react-icons/hi";
import { RiArrowDownSLine as ArrowDownIcon } from "react-icons/ri";

import { LANGUAGES } from "../../constants/languages";

import "./style.css";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(LANGUAGES[0].label);
  const [isOpen, setIsOpen] = useState(false);

  const chooseLanguage = (currentLanguage) => {
    setLanguage(currentLanguage.label);
    i18n.changeLanguage(currentLanguage.code);
    setIsOpen(false);
  };

  return (
    <div className="select-container">
      <div className="select-content" onClick={() => setIsOpen(!isOpen)}>
        <TranslateIcon />
        <div className="selected-option">
          <span>{language}</span>
        </div>
        <ArrowDownIcon className={`arrow-select${isOpen && "-open"}`} />
      </div>

      {isOpen && (
        <div className="options">
          {LANGUAGES.map((language) => (
            <div
              className="option"
              key={language.code}
              onClick={() => chooseLanguage(language)}
            >
              <span>{language.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
