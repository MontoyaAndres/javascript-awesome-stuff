import React from "react";
import "./submenu.css";

import languageJSON from "./language.json";
import { LanguageContext } from "../../context/languageContext";

import AppleSwitch from "./apple-switch";

function SubMenu() {
  const [currentGlobalLanguage, setCurrentGlobalLanguage] = React.useContext(
    LanguageContext
  );

  return (
    <div className="submenu">
      <div className="submenu-title">
        <i className="fa fa-lightbulb-o" />{" "}
        <span>{languageJSON[currentGlobalLanguage].SUBMENU_TITLE}</span>
      </div>
      <hr />
      <div className="submenu-filters">
        <div className="submenu-filter">
          <i className="fa fa-sellsy" />
          <AppleSwitch />
        </div>
        <div className="submenu-filter">
          <i className="fa fa-calendar" />
          <AppleSwitch />
        </div>
        <div className="submenu-filter">
          <i className="fa fa-heart" />
          <AppleSwitch />
        </div>
      </div>
      <hr />
      <div className="submenu-footer">
        <div className="submenu-footer-title">
          <span>
            {languageJSON[currentGlobalLanguage].SUBMENU_FOOTER_TITLE}
          </span>
        </div>
        <div className="submenu-footer-search-input">
          <input name="search" placeholder="&#xF002; Search" type="search" />
        </div>
        <button
          className="submenu-footer-button"
          onClick={() =>
            setCurrentGlobalLanguage(
              currentGlobalLanguage === "es" ? "en" : "es"
            )
          }
        >
          {languageJSON[currentGlobalLanguage].SUBMENU_FOOTER_BUTTON_TEXT}
        </button>
      </div>
    </div>
  );
}

export default SubMenu;
