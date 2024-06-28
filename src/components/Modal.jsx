import React from "react";
import { Dialog } from "primereact/dialog";
import { useSelector } from "react-redux";

const Modal = ({ modalVisible, handleClose }) => {
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
          Import / Export Help
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
          } flex gap-3 justify-end border-t pt-5 p-10 flex-wrap `}
        >
          <button className="px-4 py-2 text-sm border border-hoverColor rounded-3xl hover:bg-hoverColor hover:text-white cursor-pointer">
            Download Modifiers Sample Sheet
          </button>
          <button className="px-4 py-2 text-sm border border-hoverColor rounded-3xl hover:bg-hoverColor hover:text-white cursor-pointer">
            Download Menu Sample Sheet
          </button>
        </div>
      }
      draggable={false}
      resizable={false}
      className={` lg:w-[50%] w-[90%] ${
        theme === "light"
          ? "bg-white text-textColorLight"
          : "bg-darkPrimary text-darkSecondary"
      } rounded-xl top-10 shadow-2xl z-100 `}
    >
      <div
        className={`p-10 ${
          theme === "light"
            ? "bg-white text-textColorLight"
            : "bg-darkPrimary text-darkSecondary"
        }`}
      >
        <div className="mb-5">
          <strong>GENERAL</strong>
          <ul className="list-disc text-sm ml-3">
            <li>
              If the record is already in the menu, you need to export the Sub
              Category & Item, and Modifier Group sheets, and then make the
              necessary changes on those sheets.
            </li>
            <li>
              To update or add a record in the menu using the sheets, you need
              to first export the latest sheets from the panel.
            </li>
            <li>
              When adding data, use the ADD command. Note that the Unique ID is
              optional and will not be considered.
            </li>
            <li>
              When updating data, use the UPDATE command. In this case, the
              Unique ID is mandatory.
            </li>
            <li>If no command is provided, no actions will be taken.</li>
          </ul>
        </div>
        <div className="mb-5">
          <strong>MENU</strong>
          <ul className="list-disc text-sm ml-3">
            <li>
              If you use the ADD command, the Sub Category and Item names won't
              be checked against the database. They will be added directly.
            </li>
            <li>
              If the parent record uses the ADD command, any child records will
              automatically be added inside the parent. There's no need to check
              the command used for the child record.
            </li>
            <li>
              If you want to update a child record, the parent record should
              have the UPDATE command. For example, if you want to update a
              Modifier Group, then the Item and Sub Category commands should be
              UPDATE. If you want to change the price of an Item or update the
              Item, then the parent Sub Category should have the UPDATE command.
            </li>
            <li>
              When entering item details, the Modifier Group ID and Modifier ID
              will be checked to see if they already exist or not.
            </li>
            <li>
              If a Modifier Group or Modifier name already exists in the system
              with no Unique ID, export the sheet and add any Unique ID before
              uploading it.
            </li>
          </ul>
        </div>
        <div className="mb-5">
          <strong>MODIFIERS</strong>
          <ul className="list-disc text-sm ml-3">
            <li>
              If you do not add a Modifier to the Modifier Group, the system
              will not save the Modifier Group.
            </li>
          </ul>
        </div>
        <div className="mb-5">
          <strong>How to set name in multi language?</strong>
          <ul className="list-disc text-sm ml-3">
            <li>Use # sign to separate multi language name in between</li>
          </ul>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;



