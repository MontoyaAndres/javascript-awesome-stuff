import React from "react";
import "./item.css";

import ItemModal from "../shared/modal";

import languageJSON from "./language.json";
import { LanguageContext } from "../../context/languageContext";

function getTimeBetweenAMOrPM(time) {
  // return if the time is AM or PM, https://stackoverflow.com/a/39310728
  const [hour, minute] = time.split(":");

  return (
    (hour % 12) + 12 * (hour % 12 === 0) + ":" + minute,
    hour >= 12 ? "PM" : "AM"
  );
}

function getDayAndMonthFromDate(date, language) {
  const getDate = new Date(date);

  const day = languageJSON[language].DAYS[getDate.getDay()];
  const month = languageJSON[language].MONTHS[getDate.getMonth()];

  return {
    numberDay: getDate.getUTCDate(),
    day,
    month
  };
}

function ItemList({ items }) {
  const [selectedItem, setSelectedItem] = React.useState("");
  const [dropdownFromItemOpen, setDropdownFromItemOpen] = React.useState("");
  const [modalValuesUPDATE, setModalValuesUPDATE] = React.useState({});

  const [currentGlobalLanguage] = React.useContext(LanguageContext);

  function handleSelectedItemAndActiveCheck(itemId) {
    setSelectedItem(itemId);
  }

  function handleDropdownFromItemOpen(itemId) {
    if (dropdownFromItemOpen && dropdownFromItemOpen === itemId) {
      setDropdownFromItemOpen("");
    } else {
      setDropdownFromItemOpen(itemId);
    }
  }

  function handleModalValuesUPDATE(itemId) {
    const currentValues = JSON.parse(window.localStorage.getItem("items"));
    const values = currentValues.data.find(item => item.id === itemId);

    if (values) {
      setModalValuesUPDATE(values);
    } else {
      setModalValuesUPDATE({});
    }
  }

  function handleModalValuesDELETE(itemId) {
    const currentValues = JSON.parse(window.localStorage.getItem("items"));
    const indexToRemove = currentValues.data.findIndex(
      item => item.id === itemId
    );

    currentValues.data.splice(indexToRemove, 1);
    window.localStorage.setItem("items", JSON.stringify(currentValues));

    // reload page because the localstorage is not updated in realtime
    window.location.reload();
  }

  if (!items || !items.data || items.data.length === 0) {
    return (
      <h1 style={{ textAlign: "center" }}>
        {languageJSON[currentGlobalLanguage].NOT_FOUNT_ITEMS}
      </h1>
    );
  }

  return (
    <>
      <ItemModal
        isOpen={Boolean(Object.entries(modalValuesUPDATE).length)}
        handleCloseModal={() => handleModalValuesUPDATE(null)}
        modalData={modalValuesUPDATE}
      />

      {items.data.map(item => (
        <div className="items-list" key={item.id}>
          <div
            className="item-check"
            onClick={() => handleSelectedItemAndActiveCheck(item.id)}
          >
            <i
              className={`fa fa-check-circle ${
                item.id === selectedItem ? "active" : ""
              }`}
            />
          </div>

          <div className="item">
            <div className="item-date">
              <p>
                {getDayAndMonthFromDate(item.date, currentGlobalLanguage).day}{" "}
                {
                  getDayAndMonthFromDate(item.date, currentGlobalLanguage)
                    .numberDay
                }
                <sup>th</sup>{" "}
                {getDayAndMonthFromDate(item.date, currentGlobalLanguage).month}{" "}
                {item.time} {getTimeBetweenAMOrPM(item.time)}
              </p>
            </div>

            <hr />

            <div className="item-route">
              <div className="item-route-arrow-icon">
                <i className="fa fa-location-arrow" />
              </div>
              <div className="item-route-localization">
                <p>{item.from}</p>
                <i className="fa fa-chevron-up" />
                <p>{item.to}</p>
              </div>
            </div>

            <hr />

            <div className="item-price">
              <i className="fa fa-truck" />
              <p className="price">${item.price}</p>
              <div className="price-many-trucks">
                <span>{item.truck}</span>
              </div>
              <div
                className="dropdown"
                tabIndex="0"
                onBlur={() => handleDropdownFromItemOpen(item.id)}
              >
                <div
                  className="toggle"
                  onClick={() => handleDropdownFromItemOpen(item.id)}
                >
                  <i className="fa fa-ellipsis-v" />
                </div>

                <div
                  className={`dropdown-items ${
                    dropdownFromItemOpen === item.id ? "active" : ""
                  }`}
                >
                  <ul>
                    <li onClick={() => handleModalValuesUPDATE(item.id)}>
                      <i className="fa fa-pencil" />
                      <span>
                        {languageJSON[currentGlobalLanguage].EDIT_TEXT}
                      </span>
                    </li>
                    <li onClick={() => handleModalValuesDELETE(item.id)}>
                      <i className="fa fa-trash" />
                      <span>
                        {languageJSON[currentGlobalLanguage].DELETE_TEXT}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ItemList;
