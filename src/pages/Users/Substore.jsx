import { Form, Formik } from "formik";
import React, { useState } from "react";
import { FaInfo } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import BreadCrumb from "../../components/BreadCrumb";
import Button, { SecondaryButton } from "../../components/Button";
import Lable from "../../components/Lable";
import PasswordInput from "../../components/PasswordInput";
import Phone from "../../components/Phone";
import SidebarField from "../../components/Sidebar/SidebarField";
import TextInput from "../../components/TextInput";
import { Dialog } from "primereact/dialog";
import { FaSearch } from "react-icons/fa";

const Substore = () => {
  const storeData = [
    {
      id: "1",
      name: "Bilaspur Store",
      email: "demorajesh@edelivery.com",
      phone: "+917805953700",
    },
    {
      id: "2",
      name: "My Sub Store",
      email: "betidoh960@mfyax.com",
      phone: "+917805953760",
    },
    {
      id: "3",
      name: "Your Sub Store",
      email: "betidoh960@mfyax.com",
      phone: "+917805953760",
    },
    {
      id: "4",
      name: "Our Sub Store",
      email: "betidoh960@mfyax.com",
      phone: "+917805953760",
    },
  ];

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };

  const tableData = [
    { id: 1, name: "Order", add: true, edit: true, delte: false, export: true },
    {
      id: 1,
      name: "History",
      add: false,
      edit: false,
      delte: false,
      export: true,
    },
    {
      id: 1,
      name: "Earning",
      add: false,
      edit: false,
      delte: false,
      export: true,
    },
    { id: 1, name: "Menu", add: true, edit: true, delte: true, export: true },
    {
      id: 1,
      name: "Offers",
      add: true,
      edit: true,
      delte: false,
      export: false,
    },
    {
      id: 1,
      name: "Store Settings",
      add: false,
      edit: true,
      delte: false,
      export: false,
    },
    {
      id: 1,
      name: "Delivery Settings",
      add: true,
      edit: true,
      delte: false,
      export: false,
    },
    {
      id: 1,
      name: "Store Time Settings",
      add: false,
      edit: true,
      delte: false,
      export: false,
    },
    {
      id: 1,
      name: "Table Booking",
      add: true,
      edit: true,
      delte: false,
      export: false,
    },
  ];

  const [visible, setVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [infoModal, setInfoModal] = useState(false)

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };
  const handleInfoModal = () => {
    setInfoModal(true);
  };

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = storeData.filter((item) => {
    return Object.values(item).some(
      (objValue) =>
        objValue !== null &&
        objValue
          .toString()
          .toLowerCase()
          .includes(searchQuery.trim().toLowerCase())
    );
  });

  return (
    <div className="p-5 w-[100%]">
      <div className="flex justify-between items-center flex-wrap mb-2">
        <BreadCrumb title="Sub Stores" />

        <Button
          text="Add New"
          type="button"
          className="float-end"
          onClick={handleOpen}
        />
      </div>
      <div className="mb-5 border-b pb-2">
        <div className="border rounded-full px-3 py-1.5 text-xs bg-transparent w-fit flex justify-between items-center">
          <input
            type="search"
            placeholder="search..."
            value={searchQuery}
            onChange={handleSearch}
            className="bg-transparent outline-none"
          />
          <FaSearch />
        </div>
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {filteredData.map((item) => (
          <Card item={item} key={item.id} handleOpen={handleOpen} handleInfoModal={handleInfoModal}/>
        ))}
      </div>

      {visible ? (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ handleChange, values, handleSubmit }) => (
            <SidebarField
              handleClose={handleClose}
              title="Sub Stores"
              button1={
                <Button text="Cancel" type="button" onClick={handleClose} />
              }
              button2={<Button text="Submit" onClick={handleSubmit} />}
            >
              <Form className="w-full gap-4 flex flex-col bg-transparent py-5 px-3">
                <div>
                  <Lable lable={"Name"} />
                  <TextInput
                    type="text"
                    name="name"
                    placeholder={""}
                    onChange={handleChange}
                    value={values.name}
                  />
                </div>
                <div>
                  <Lable lable={"Email"} />
                  <TextInput
                    type="email"
                    name="email"
                    placeholder={""}
                    onChange={handleChange}
                    value={values.email}
                  />
                </div>
                <div>
                  <Lable lable={"Phone"} />
                  <Phone value={values.phone} name="phone" />
                </div>
                <div>
                  <Lable lable={"Password"} />
                  <PasswordInput
                    type="password"
                    name="password"
                    placeholder={""}
                    onChange={handleChange}
                    value={values.password}
                  />
                </div>
                <TableOne tableData={tableData} />
                <TableTwo tableData={tableData} />
              </Form>
            </SidebarField>
          )}
        </Formik>
      ) : null}

      {infoModal ? <Modal handleInfoModalClose={()=>setInfoModal(false)} infoModal={infoModal} tableData={tableData}/> : null}
    </div>
  );
};

export default Substore;

const Card = ({ item, handleOpen, handleInfoModal }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <>
    <div
      className={`${
        theme === "light" ? "bg-secondaryColor" : "bg-darkThirsary"
      } shadow-2xl  rounded-xl w-full p-4`}
    >
      <div className="flex justify-between">
        <p className="text-lg">{item.name}</p>
        <div className="flex gap-2">
          <SecondaryButton text=" Edit" onClick={handleOpen} />
          <span 
            className=" text-[10px] flex items-center justify-center p-2 border border-hoverColor rounded-full cursor-pointer text-hoverColor hover:bg-hoverColor hover:text-white"
            onClick={handleInfoModal}
          >
            <FaInfo className="font-bolder" />
          </span>
        </div>
      </div>
      <span className="text-[12px] text-gray-400">
        {item.email},&nbsp;{item.phone}
      </span>
    </div>
    
    </>
  );
};

const TableOne = ({ tableData }) => {

  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = tableData.filter((item) => {
    return Object.values(item).some(
      (objValue) =>
        objValue !== null &&
        objValue
          .toString()
          .toLowerCase()
          .includes(searchQuery.trim().toLowerCase())
    );
  });
  return (
    <table className="w-full" border={1}>
      <thead className="bg-forthColor text-sm">
        <tr>
          <th className=" border border-collapse p-2 text-center">
            <input type="search..." className="border px-2.5 py-1.5 text-sm" onChange={handleSearch}/>
          </th>
          <th className=" border border-collapse p-2 text-center">Add</th>
          <th className=" border border-collapse p-2 text-center">Edit</th>
          <th className=" border border-collapse p-2 text-center">Delete</th>
          <th className=" border border-collapse p-2 text-center">Export</th>
        </tr>
      </thead>
      {filteredData.map((item) => {
        return (
          <tbody>
            <tr>
              <td className=" border border-collapse p-2 ">{item.name}</td>
              <td className=" border border-collapse p-2 text-center">
                {item.add ? <input type="checkbox" /> : <RxCross2 />}
              </td>
              <td className=" border border-collapse p-2 text-center">
                {item.edit ? <input type="checkbox" /> : <RxCross2 />}
              </td>
              <td className=" border border-collapse p-2 text-center">
                {item.delete ? <input type="checkbox" /> : <RxCross2 />}
              </td>
              <td className=" border border-collapse p-2 text-center">
                {item.export ? <input type="checkbox" /> : <RxCross2 />}
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

const TableTwo = ({ tableData }) => {
  return (
    <table className="w-full " border={1}>
      <thead className="bg-forthColor text-sm">
        <tr>
          <th className=" border border-collapse p-2 text-center">App Urls</th>
          <th className=" border border-collapse p-2 text-center">Add</th>
          <th className=" border border-collapse p-2 text-center">Edit</th>
          <th className=" border border-collapse p-2 text-center">Delete</th>
          <th className=" border border-collapse p-2 text-center">Export</th>
        </tr>
      </thead>
      {tableData.map((item) => {
        return (
          <tbody>
            <tr>
              <td className=" border border-collapse p-2 ">{item.name}</td>
              <td className=" border border-collapse p-2 text-center">
                {item.add ? <input type="checkbox" /> : <RxCross2 />}
              </td>
              <td className=" border border-collapse p-2 text-center">
                {item.edit ? <input type="checkbox" /> : <RxCross2 />}
              </td>
              <td className=" border border-collapse p-2 text-center">
                {item.delete ? <input type="checkbox" /> : <RxCross2 />}
              </td>
              <td className=" border border-collapse p-2 text-center">
                {item.export ? <input type="checkbox" /> : <RxCross2 />}
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

const Modal = ({ infoModal, handleInfoModalClose, tableData }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <Dialog
      header={<h1 className={`${
        theme === "light"
          ? "bg-white text-textColorLight"
          : "bg-darkPrimary text-darkSecondary"
      } border-b p-10 pb-5`}>Sub Admin URL list ( bilaspur Store )</h1>}
      visible={infoModal}
      position={"center"}

      onHide={handleInfoModalClose}
      draggable={false}
      resizable={false}
      className={` ${
        theme === "light"
          ? "bg-white text-textColorLight"
          : "bg-darkPrimary text-darkSecondary"
      } rounded-xl top-10 shadow-2xl z-100 `}
    >
      <div className={`${
        theme === "light"
          ? "bg-white text-textColorLight"
          : "bg-darkPrimary text-darkSecondary"
      } p-3`}>
      <TableOne tableData={tableData}/>
      </div>
    </Dialog>
  );
};


