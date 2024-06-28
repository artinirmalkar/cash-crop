import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Form, Formik } from "formik";
import { TbPoint } from "react-icons/tb";
import BreadCrumb from "../../components/BreadCrumb";
import Button, { SecondaryButton } from "../../components/Button";
import SidebarField from "../../components/Sidebar/SidebarField";
import Lable from "../../components/Lable";
import TextInput from "../../components/TextInput";
import ToggleField from "../../components/ToggleField";
import { getModifierCategory } from "../../store/slices/modifierCategorySlice";
import { GoDotFill } from "react-icons/go";
import { MdEdit } from "react-icons/md";

const ModifierCategory = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  const modifierCategoryData = [
    {
      name: "Add Veg Toppings",
      submenu: [
        {
          name: "GRILLED MUSHROOMS ",
        },
        {
          name: "ONION",
        },
        {
          name: " CRISP CAPSICUM",
        },
        {
          name: "FRESH TOMATO",
        },
        {
          name: "PANEER",
        },
        {
          name: "RED PEPPER",
        },
        {
          name: "JALAPENO",
        },
        {
          name: "GOLDEN CORN",
        },
        {
          name: "BLACK OLIVE",
        },
      ],
    },
    {
      name: "Select Crust",
      submenu: [
        {
          name: "GRILLED MUSHROOMS ",
        },
        {
          name: "ONION",
        },
        {
          name: " CRISP CAPSICUM",
        },
        {
          name: "FRESH TOMATO",
        },
        {
          name: "PANEER",
        },
        {
          name: "RED PEPPER",
        },
        {
          name: "JALAPENO",
        },
        {
          name: "GOLDEN CORN",
        },
        {
          name: "BLACK OLIVE",
        },
      ],
    },
  ];
  const submenu = [
    {
      name: "GRILLED MUSHROOMS ",
    },
    {
      name: "ONION",
    },
    {
      name: " CRISP CAPSICUM",
    },
    {
      name: "FRESH TOMATO",
    },
    {
      name: "PANEER",
    },
    {
      name: "RED PEPPER",
    },
    {
      name: "JALAPENO",
    },
    {
      name: "GOLDEN CORN",
    },
    {
      name: "BLACK OLIVE",
    },
  ];

  const [visible, setVisible] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [addModifier, setAddModifier] = useState(false);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };
  const handleEditModalClose = () => {
    setEditModal(false);
  };
  const handleAddModifierOpen = () => {
    setAddModifier(true);
  };
  const handleAddModifierClose = () => {
    setAddModifier(false);
  };

  // Get All modifier category list
  useEffect(() => {
    dispatch(getModifierCategory());
  }, [dispatch]);

  const handleSubmit = (values) => {
    console.log("Form values:", values);
  };


  return (
    <div className="p-4">
      <div className="flex justify-between items-center flex-wrap mb-2">
        <BreadCrumb title={"Modifier Category"} />
        <Button
          text="Add New"
          type="button"
          className="float-end"
          onClick={handleOpen}
        />
      </div>
      <div
        className={`${
          theme === "light" ? "bg-secondaryColor" : "bg-darkThirsary"
        } shadow-2xl rounded-xl w-full p-4`}
      >
        {modifierCategoryData.map((item, i) => (
          <div className="border-b px-2 py-4" key={i}>
            <p className="flex gap-2 justify-between">
              <span className="flex gap-2 items-center text-buttonColor font-semibold text-md">
                <TbPoint className="text-green-800 text-xl" />
                {item.name}
              </span>
              <SecondaryButton   onClick={() => setEditModal(true)} text='Edit'/>
            </p>
            <div>
              {item.submenu.map((value, j) => (
                <span className="text-[12.5px]" key={j}>
                  {value.name}&nbsp;|&nbsp;
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {visible && (
        <Formik
          initialValues={{ name: "", user_visibility: false }}
          onSubmit={handleSubmit}
        >
          {({ handleChange, values, handleSubmit }) => (
            <SidebarField
              button1={
                <Button text="Cancel" type="button" onClick={handleClose} />
              }
              button2={<Button text="Save" onClick={handleSubmit} />}
              handleClose={handleClose}
              title="Add New Modifier Category"
            >
              <Form className="w-full gap-4 flex flex-col bg-transparent py-5 px-3">
                <div>
                  <Lable lable="Modifier Category Name" />
                  <TextInput
                    name="name"
                    type="text"
                    placeholder="Modifier Category Name"
                    onChange={handleChange}
                    value={values.name}
                  />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div>
                  <ToggleField
                    text="Is modifier category visible to user ?"
                    name="user_visibility"
                    onChange={handleChange}
                    value={values.user_visibility}
                  />
                </div>
              </Form>
            </SidebarField>
          )}
        </Formik>
      )}
      {editModal && (
        <Formik
          initialValues={{ name: "", user_visibility: false }}
          onSubmit={handleSubmit}
        >
          {({ handleChange, values, handleSubmit }) => (
            <SidebarField
              button1={
                <Button
                  text="Add Modifier"
                  type="button"
                  onClick={handleAddModifierOpen}
                />
              }
              button2={<Button text="Save" onClick={handleSubmit} />}
              handleClose={handleEditModalClose}
              title="Edit Modifier Category"
            >
              <Form className="w-full gap-4 flex flex-col bg-transparent py-5 px-3">
                <div>
                  <Lable lable="Modifier Category Name" />
                  <TextInput
                    name="name"
                    type="text"
                    placeholder="Modifier Category Name"
                    onChange={handleChange}
                    value={values.name}
                  />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div>
                  <ToggleField
                    text="Is modifier category visible to user?"
                    name="user_visibility"
                    onChange={handleChange}
                    value={values.user_visibility}
                  />
                </div>
                <div>
                  <Lable lable={"Modifiers"} />
                  <div className=" w-full">
                    {submenu.map((item, i) => (
                      <div
                        key={i}
                        className=" border  flex justify-between mb-1 items-center text-[12px] "
                      >
                        <p className="w-1 border-r px-1 py-2  flex justify-center items-center">
                          {i}
                        </p>
                        <p className="w-full  px-1 py-2 capitalize flex justify-left items-center">
                          <GoDotFill
                            style={{ color: "green" }}
                            className="text-md"
                          />{" "}
                          &nbsp;&nbsp;{item.name}
                        </p>
                        <p
                          className="w-1 border-l px-1 py-2  cursor-pointer  flex justify-center items-center"
                          onClick={handleAddModifierOpen}
                        >
                          <MdEdit className="text-sm" />
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Form>
            </SidebarField>
          )}
        </Formik>
      )}
      {addModifier && (
        <Formik
          initialValues={{
            name: "",
            price: "",
            sequence_number: "",
            user_visibility: false,
          }}
          onSubmit={handleSubmit}
        >
          {({ handleChange, values, handleSubmit }) => (
            <SidebarField
              button1={
                <Button
                  text="Back"
                  type="button"
                  onClick={handleAddModifierClose}
                />
              }
              button2={<Button text="Save" onClick={handleSubmit} />}
              handleClose={handleAddModifierClose}
              title="Add New Modifier Item"
            >
              <Form className="w-full gap-4 flex flex-col bg-transparent py-5 px-3">
                <div>
                  <Lable lable="Modifier Name" />
                  <TextInput
                    name="name"
                    type="text"
                    placeholder="Modifier Name"
                    onChange={handleChange}
                    value={values.name}
                  />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div>
                  <Lable lable="Price" />
                  <TextInput
                    name="price"
                    type="text"
                    placeholder="Price"
                    onChange={handleChange}
                    value={values.price}
                  />
                  <ErrorMessage
                    name="price"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <Lable lable="Sequence Number" />
                  <TextInput
                    name="sequence_number"
                    type="text"
                    placeholder="Sequence Number"
                    onChange={handleChange}
                    value={values.sequence_number}
                  />
                  <ErrorMessage
                    name="sequence_number"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <ToggleField
                    text="Is modifier visible to user ?"
                    name="user_visibility"
                    onChange={handleChange}
                    value={values.user_visibility}
                  />
                </div>
              </Form>
            </SidebarField>
          )}
        </Formik>
      )}
    </div>
  );
};

export default ModifierCategory;
