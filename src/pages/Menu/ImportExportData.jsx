import React, { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import Button, { SecondaryButton } from "../../components/Button";
import { useSelector } from "react-redux";
import TextInput from "../../components/TextInput";
import Modal from "../../components/Modal";

const ImportExportData = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleOpen = () => {
    setModalVisible(true);
  };
  const handleClose = () => {
    setModalVisible(false);
  };
  return (
    <>
      <div className="p-4">
        <div className="flex justify-between items-center flex-wrap mb-2">
          <BreadCrumb title={"Import Export"} />
          <Button
            text="Help"
            type="button"
            className="float-end"
            onClick={handleOpen}
          />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-5">
          <Card name="Import/Export Sub Category - Item" />
          <Card name="Import/Export Modifier group" />
          <Card name="Import Images" />
        </div>
      </div>

      {modalVisible ? (
        <Modal modalVisible={modalVisible} handleClose={handleClose} />
      ) : null}
    </>
  );
};

export default ImportExportData;

const Card = ({ name }) => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div
      className={`${
        theme === "light" ? "bg-secondaryColor" : "bg-darkThirsary"
      } shadow-2xl rounded-xl w-full p-4`}
    >
      <div className="flex justify-between">
        <p className="text-lg">{name}</p>

        <SecondaryButton text={"Export"} />
      </div>
      <span className="text-[12px] text-gray-400 my-10 flex w-full">
        <label htmlFor="image-upload" className="w-full flex">
          <TextInput type="file" placeholder="Choose File" id="image-upload" />
          <button className="border  px-5" id="image-upload">
            Browse
          </button>
        </label>
        <button className="border px-5">Upload</button>
      </span>
    </div>
  );
};
