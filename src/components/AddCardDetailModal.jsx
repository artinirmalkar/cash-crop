import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import { FaAddressCard } from "react-icons/fa";
import { useSelector } from "react-redux";
import Button from "./Button";

const AddCardDetailModal = ({ modalVisible, handleClose }) => {
  const { theme } = useSelector((state) => state.theme);

  const [number, setNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");

  function handleNumber(e) {
    const inputVal = e.target.value;

    let inputNumbersOnly = inputVal.replace(/\D/g, "");

    if (inputNumbersOnly.length > 16) {
      inputNumbersOnly = inputNumbersOnly.substr(0, 16);
    }

    const splits = inputNumbersOnly.match(/.{1,4}/g);

    let spacedNumber = "";
    if (splits) {
      spacedNumber = splits.join(" "); 
    }

    setNumber(spacedNumber);
  }

  const handleSubmit = () => {
    const payload = {
      number,
      cvv,
      month,
      year,
    };
    console.log("card paylod", payload);
  };

  return (
    <Dialog
      header={
        <h1
          className={`${
            theme === "light"
              ? "bg-white text-textColorLight"
              : "bg-darkPrimary text-darkSecondary"
          } border-b p-10 pb-5 `}
        >
          Add card details
        </h1>
      }
      visible={modalVisible}
      position={"top"}
      onHide={handleClose}
      footer={
        <div
          className={`${
            theme === "light"
              ? "bg-white text-textColorLight"
              : "bg-darkPrimary text-darkSecondary"
          } flex gap-3 justify-end border-t pt-5 p-10 flex-wrap`}
        >
          <Button text={"Add Card"} type={"button"} onClick={handleSubmit} />
        </div>
      }
      draggable={false}
      resizable={false}
      className={`lg:w-[30%] w-[90%] ${
        theme === "light"
          ? "bg-white text-textColorLight"
          : "bg-darkPrimary text-darkSecondary"
      } rounded-xl top-10 shadow-2xl z-100`}
    >
      <div
        className={`p-10 ${
          theme === "light"
            ? "bg-white text-textColorLight"
            : "bg-darkPrimary text-darkSecondary"
        }`}
      >
        <div className="flex justify-between gap-2 flex-wrap">
          <div className="flex  items-center gap-2">
            <FaAddressCard />
            <input
              type="text"
              placeholder="card number"
              value={number}
              onChange={handleNumber}
              className="cardInput text-sm"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="MM"
              value={month}
              onChange={(e) => {
                const inputValue = e.target.value.slice(0, 2);
                setMonth(inputValue);
              }}
              maxLength={2}
              errorMessage="Please input a valid year"
              style={{ width: "2rem", textAlign: "center" }}
              className="cardInput text-sm"
            />
            <span>/</span>
            <input
              type="number"
              placeholder="YY"
              value={year}
              onChange={(e) => {
                const inputValue = e.target.value.slice(0, 2);
                setYear(inputValue);
              }}
              maxLength={2}
              errorMessage="Please input a valid year"
              style={{ width: "2rem", textAlign: "center" }}
              className="cardInput text-sm"
            />
            <input
              type="number"
              placeholder="cvv"
              value={cvv}
              onChange={(e) => {
                const inputValue = e.target.value.slice(0, 4);
                setCvv(inputValue);
              }}
              maxLength={4}
              style={{ width: "3rem", textAlign: "center" }}
              className="cardInput text-sm"
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default AddCardDetailModal;
