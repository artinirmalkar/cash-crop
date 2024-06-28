import React from "react";
import { Dialog } from "primereact/dialog";
import { useSelector } from "react-redux";
import Lable from "./Lable";
import PasswordInput from "./PasswordInput";
import Button, { SecondaryButton } from "./Button";

const DeleteModal = ({ modalVisible, handleClose }) => {
  const { theme } = useSelector((state) => state.theme);

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
          Confirm user deletion
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
          } flex gap-3 justify-center border-t pt-5 p-10 flex-wrap`}
        >
          <SecondaryButton
            text="Cancel"
            type="button"
            onClick={handleClose}
            padding={"px-5 py-2"}
          />
          <Button text={"Confirm"} type={"button"} />
        </div>
      }
      draggable={false}
      resizable={false}
      className={`lg:w-[30%] w-[90%] ${theme === "light" ? "bg-white text-textColorLight" : "bg-darkPrimary text-darkSecondary"} rounded-xl top-10 shadow-2xl z-100`}>
      <div className={`p-10 ${theme === "light" ? "bg-white text-textColorLight" : "bg-darkPrimary text-darkSecondary"}`}>
        <Lable lable={"On confirming deletion it will delete all user data permanently"} />
        <PasswordInput placeholder={"Password"} />
      </div>
    </Dialog>
  );
};

export default DeleteModal;
