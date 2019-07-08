import React from "react";
import { v4 } from "uuid";
import "./modal.css";

import languageJSON from "./language.json";
import { LanguageContext } from "../../../context/languageContext";

const initialState = {
  date: new Date().toISOString().substr(0, 10),
  time: "",
  from: "",
  to: "",
  price: "",
  truck: ""
};

function Modal({ isOpen, handleCloseModal, modalData = initialState }) {
  const [currentGlobalLanguage] = React.useContext(LanguageContext);
  const [values, setValues] = React.useState(modalData);

  React.useEffect(() => {
    // If the object sent has the time value, means that the rest of values are there
    setValues(modalData.time !== "" ? modalData : initialState);
  }, [modalData]);

  function handleSetValue(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleCreateOrUpdateItem() {
    const currentValues = JSON.parse(window.localStorage.getItem("items"));
    const id = v4();

    if (currentValues && currentValues.data.length > 0) {
      // If the values has an id, means that the user wants to edit any item.
      if (values.id) {
        const index = currentValues.data.findIndex(
          item => item.id === values.id
        );

        currentValues.data[index].date = values.date;
        currentValues.data[index].time = values.time;
        currentValues.data[index].from = values.from;
        currentValues.data[index].to = values.to;
        currentValues.data[index].price = values.price;
        currentValues.data[index].truck = values.truck;
      } else {
        // If not, he/she wants to add any item
        currentValues.data.push({ id, ...values });
      }

      window.localStorage.setItem("items", JSON.stringify(currentValues));
    } else {
      window.localStorage.setItem(
        "items",
        JSON.stringify({ data: [{ id, ...values }] })
      );
    }

    setValues(initialState);
    handleCloseModal();
  }

  return (
    <div className="wrapper" style={{ display: isOpen ? "initial" : "none" }}>
      <div className="overlay" onClick={handleCloseModal} />

      <div className="modal">
        <div className="modal-content">
          <span className="modal-close" onClick={handleCloseModal}>
            &times;
          </span>

          <div className="modal-title">
            {languageJSON[currentGlobalLanguage].MODAL_TITLE}
          </div>

          <div className="modal-input">
            <label htmlFor="date">
              {languageJSON[currentGlobalLanguage].MODAL_INPUT_DATE}
            </label>
            <input
              name="date"
              type="date"
              id="date"
              onChange={handleSetValue}
              value={values.date}
            />
          </div>
          <div className="modal-input">
            <label htmlFor="time">
              {languageJSON[currentGlobalLanguage].MODAL_INPUT_TIME}
            </label>
            <input
              name="time"
              type="time"
              id="time"
              onChange={handleSetValue}
              value={values.time}
            />
          </div>
          <div className="modal-input">
            <label htmlFor="from">
              {languageJSON[currentGlobalLanguage].MODAL_INPUT_FROM}
            </label>
            <input
              name="from"
              type="text"
              id="from"
              onChange={handleSetValue}
              value={values.from}
            />
          </div>
          <div className="modal-input">
            <label htmlFor="to">
              {languageJSON[currentGlobalLanguage].MODAL_INPUT_TO}
            </label>
            <input
              name="to"
              type="text"
              id="to"
              onChange={handleSetValue}
              value={values.to}
            />
          </div>
          <div className="modal-input">
            <label htmlFor="price">
              {languageJSON[currentGlobalLanguage].MODAL_INPUT_PRICE}
            </label>
            <input
              name="price"
              type="number"
              id="price"
              onChange={handleSetValue}
              value={values.price}
            />
          </div>
          <div className="modal-input">
            <label htmlFor="truck">
              {languageJSON[currentGlobalLanguage].MODAL_INPUT_TRUCKS}
            </label>
            <input
              name="truck"
              type="number"
              id="truck"
              onChange={handleSetValue}
              value={values.truck}
            />
          </div>
          <div className="modal-input">
            <button onClick={handleCreateOrUpdateItem}>
              {languageJSON[currentGlobalLanguage].MODAL_BUTTON_TEXT}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
