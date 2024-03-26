import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HiOutlineExternalLink as ExternalLinkIcon } from "react-icons/hi";

import "./style.css";

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <div className="navbar-container">
        <NavLink className="navbar-container-link" to="/">
          {t("NAVBAR.HOME")}
        </NavLink>
        <NavLink className="navbar-container-link" to="/timeline">
          {t("NAVBAR.TIMELINE")}
        </NavLink>

        <a
          href="https://nopiqueviajante.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-container-link external-link"
        >
          {t("NAVBAR.BLOG")}
          <ExternalLinkIcon className="external-link-icon" />
        </a>
      </div>
    </nav>
  );
};
