import React from "react";
import "./menu.css";

import languageJSON from "./language.json";
import { LanguageContext } from "../../context/languageContext";

function Menu() {
  const [isActive, setIsActive] = React.useState(false);
  const [currentGlobalLanguage] = React.useContext(LanguageContext);

  function handleActiveEveryItem() {
    setIsActive(!isActive);
  }

  return (
    <>
      <ul className="menu">
        <li className="active">
          <i className="fa fa-home" />
          <a href="#">{languageJSON[currentGlobalLanguage].MENU_ITEMS[0]}</a>
        </li>
        <li>
          <i className="fa fa-envelope" />
          <a href="#">{languageJSON[currentGlobalLanguage].MENU_ITEMS[1]}</a>
        </li>
        <li>
          <i className="fa fa-star" />
          <a href="#">{languageJSON[currentGlobalLanguage].MENU_ITEMS[2]}</a>
        </li>
        <li>
          <i className="fa fa-cog" />
          <a href="#">{languageJSON[currentGlobalLanguage].MENU_ITEMS[3]}</a>
        </li>
        <li>
          <i className="fa fa-user" />
          <a href="#">{languageJSON[currentGlobalLanguage].MENU_ITEMS[4]}</a>
        </li>
      </ul>

      <div className="menu-items">
        <div className="menu-select-all-items">
          <i
            className={`fa fa-check-circle ${isActive ? "active" : ""}`}
            onClick={handleActiveEveryItem}
          />
        </div>

        <div className="menu-search-input">
          <input name="search" placeholder="&#xF002; Search" type="search" />
        </div>
      </div>
    </>
  );
}

export default Menu;
