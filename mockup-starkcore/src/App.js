import React from "react";
import "./App.css";

import Logo from "./components/logo";
import Menu from "./components/menu";
import ItemList from "./components/itemList";
import SubMenu from "./components/submenu";
import ItemModal from "./components/shared/modal";

import { LanguageProvider } from "./context/languageContext";

function App() {
  const items = JSON.parse(window.localStorage.getItem("items"));
  const [isOpenCreateItemModal, setIsOpenCreateItemModal] = React.useState(
    false
  );

  React.useEffect(() => {
    if (isOpenCreateItemModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpenCreateItemModal]);

  function handleOpenCreateItemModal() {
    setIsOpenCreateItemModal(!isOpenCreateItemModal);
  }

  return (
    <LanguageProvider>
      <ItemModal
        isOpen={isOpenCreateItemModal}
        handleCloseModal={handleOpenCreateItemModal}
      />
      <div className="app">
        <div className="app-1">
          <Logo />
          <SubMenu />
        </div>
        <div className="app-2">
          <Menu />
          <ItemList items={items} />
        </div>

        <a
          href="#"
          className="float-button"
          onClick={handleOpenCreateItemModal}
        >
          <i className="fa fa-plus float-button-icon" />
        </a>
      </div>
    </LanguageProvider>
  );
}

export default App;
