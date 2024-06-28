import { ErrorMessage, Form, Formik } from "formik";
import React, { useState } from "react";
import { FaCamera, FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiInfo } from "react-icons/fi";
import { IoAddCircleOutline } from "react-icons/io5";
import { TbPoint } from "react-icons/tb";
import BreadCrumb from "../../components/BreadCrumb";
import Button, { SecondaryButton } from "../../components/Button";
import Card from "../../components/Card";
import Dropdown from "../../components/Dropdown";
import { FormField } from "../../components/FormField";
import Lable from "../../components/Lable";
import SidebarField from "../../components/Sidebar/SidebarField";
import SidebarRight from "../../components/Sidebar/SidebarRight";
import TextInput from "../../components/TextInput";
import Textarea from "../../components/Textarea";
import ToggleField from "../../components/ToggleField";
import { FaSearch } from "react-icons/fa";

const ItemList = () => {

  const [addItemVisible, setAddItemVisible] = useState(false);
  const [addModifier, setAddModifier] = useState(false);
  const [updateModifier, setUpdateModifier] = useState(null);
  const [visible, setVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [step, setStep] = useState(0);
  const [toggle, setToggle] = useState("iteminfo");
  const [searchQuery, setSearchQuery] = useState("");

  const cardData = [
    {
      id: "1",
      name: "Chicken Golden Delight",
      img: "https://apiedelivery.elluminatiinc.net/store_items/660d51387b5d464723699c02PEWK.jpg",
    },
    {
      id: "2",
      name: "Non Veg Supreme",
      img: "https://apiedelivery.elluminatiinc.net/store_items/660d51387b5d464723699c02PEWK.jpg",
    },
  ];

  const filterMenu = [
    "Non Veg",
    "Non Pizzas",
    "Burgers",
    "Veg Biryani",
    "Chicken Biryani",
    "Hundi Biryani",
    "Energy Drinks",
    "Cold Drinks",
    "Lassi",
    "Dosa",
  ];

  const handleOpen = () => setVisible(true);
  const handleClose = () => setVisible(false);
  const handleToggle = (name) => setToggle(name);
  const handleSubmit = (values) => console.log("Item List values", values);

  const handleNext = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 2));
  };

  const handleBack = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleAddImages = () => {};

  const handleAddModifier = () => {
    setAddModifier(true);
  };

  const handleUpdateModifier = (item) => {
    setUpdateModifier(item);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = cardData.filter((item) => {
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
    <>
      <div className="flex justify-between">
        <div className="lg:w-9/12 p-10">
          <div className="flex justify-between items-center flex-wrap mb-2">
            <BreadCrumb title="Item" />
            <Button
              text="Add New"
              type="button"
              className="float-end"
              onClick={() => setAddItemVisible(true)}
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
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {filteredData.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </div>
        <SidebarRight>
          <h1 className="mb-10 text-lg font-semibold border-b pb-2">Sub Category</h1>
          <div className="w-full flex flex-col">
            {filterMenu.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b">
                <div className="flex gap-2">
                  <TbPoint style={{ color: "green" }} className="text-xl" />
                  {item}
                </div>
                <SecondaryButton text='Edit'  onClick={() => setEditVisible(true)}/>
              </div>
            ))}
            <div className="mt-5">
              <Button type="button" text="Add New" onClick={handleOpen} />
            </div>
          </div>
        </SidebarRight>
      </div>

      {addItemVisible && (
        <Formik
          initialValues={{
            name: "",
            price: "",
            tax: "",
            sub_category: "",
            description: "",
            user_visibility: true,
            stock: true,
            sequence_number: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ handleChange, values }) => (
            <SidebarField
              button1={
                <Button
                  text={`${step === 2 ? "Add Modifier" : "Back"}`}
                  type="button"
                  onClick={step === 2 ? handleAddModifier : handleBack}
                />
              }
              button2={
                <Button text="Next " type="submit" onClick={handleNext} />
              }
              handleClose={() => setAddItemVisible(false)}
              title="Add New Item"
            >
              <div className="flex items-center mx-10">
                {["iteminfo", "images", "modifiers"].map((section, index) => (
                  <React.Fragment key={index}>
                    <div
                      className={`flex flex-col gap-2 items-center w-5 justify-center ${
                        index === step
                          ? "cursor-pointer"
                          : "cursor-not-allowed "
                      }`}
                      onClick={() => handleToggle(section)}
                      aria-disabled={
                        toggle !== "iteminfo" && section !== toggle
                      }
                      disabled={toggle !== "iteminfo" && section !== toggle}
                    >
                      <span
                        className={`p-2 border rounded-full ${
                          index === step
                            ? "border-buttonColor"
                            : "border-slate-300"
                        }`}
                      >
                        {section === "iteminfo" && (
                          <FiInfo
                            className={`${
                              index === step ? "" : "text-slate-300"
                            } text-lg`}
                          />
                        )}
                        {section === "images" && (
                          <FaCamera
                            className={`${
                              index === step ? "" : "text-slate-300"
                            } text-lg`}
                          />
                        )}
                        {section === "modifiers" && (
                          <FaRegCircleCheck
                            className={`${
                              index === step ? "" : "text-slate-300"
                            } text-lg`}
                          />
                        )}
                      </span>
                      <span className="font-semibold">
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </span>
                    </div>
                    {index < 2 && <div className="border-t w-full"></div>}
                  </React.Fragment>
                ))}
              </div>
              <Form className="w-full gap-4 flex flex-col bg-transparent py-5 px-3">
                {step === 0 && (
                  <>
                    <FormField label="Item Name">
                      <div className="flex items-center">
                        <span className="border p-2 pl-3 pr-5 text-sm border-r-none">
                          EN
                        </span>
                        <TextInput
                          name="name"
                          type="text"
                          placeholder="Item Name"
                          value={values.name}
                          onChange={handleChange}
                        />
                      </div>
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error"
                      />
                    </FormField>
                    <div className="flex justify-between gap-2">
                      <FormField label="Price" className="w-[90%]">
                        <div className="flex items-center">
                          <span className="border p-2 pl-3 pr-5 text-sm border-r-none">
                            ₹
                          </span>
                          <TextInput
                            name="price"
                            type="number"
                            placeholder="0"
                            value={values.price}
                            onChange={handleChange}
                          />
                        </div>
                        <ErrorMessage
                          name="price"
                          component="div"
                          className="error"
                        />
                      </FormField>
                      <FormField label="VAT/TAX" className="w-[90%]">
                        <Dropdown
                          options={[{}]}
                          name="tax"
                          value={values.tax}
                          onChange={handleChange}
                        />
                        <ErrorMessage
                          name="tax"
                          component="div"
                          className="error"
                        />
                      </FormField>
                    </div>
                    <FormField label="Sub Category">
                      <Dropdown
                        options={[{}]}
                        name="sub_category"
                        value={values.sub_category}
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="sub_category"
                        component="div"
                        className="error"
                      />
                    </FormField>
                    <FormField label="Description">
                      <Textarea
                        name="description"
                        placeholder="Item Description"
                        value={values.description}
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="description"
                        component="div"
                        className="error"
                      />
                    </FormField>
                    <div className="flex justify-between flex-wrap-reverse gap-4">
                      <div>
                        <ToggleField  
                          text="Is Item Visible to user?"
                          name="user_visibility"
                        />
                        <ToggleField text="In stock" name="stock" />
                      </div>
                      <FormField label="Sequence Number">
                        <TextInput
                          name="sequence_number"
                          type="number"
                          value={values.sequence_number}
                          onChange={handleChange}
                        />
                      </FormField>
                    </div>
                  </>
                )}
                {step === 1 && (
                  <div className="flex justify-center gap-5 flex-wrap">
                    {/* {imagesList.length > 0 && imagesList.map((imgUrl, index) => (
                      <div
                        key={index}
                        className="w-52 h-44  shadow-2xl text-center rounded-xl relative"
                      >
                        <input
                          type="checkbox"
                          className="m-2 absolute z-1 right-0"
                          value={index}
                          onChange={(e) => {
                           
                          }}
                        />
                        <img
                          src={imgUrl}
                          alt={`Item ${index + 1}`}
                          className="object-cover rounded-xl"
                        />
                      </div>
                    ))}  */}
                    <label
                      htmlFor="image-upload"
                      className="w-52 h-44 shadow-2xl text-center rounded-xl flex items-center justify-center gap-3 flex-col cursor-pointer"
                    >
                      <IoAddCircleOutline className="text-5xl text-slate-500" />
                      <input
                        type="file"
                        id="image-upload"
                        accept="image/*"
                        name="images"
                        onChange={handleAddImages}
                        style={{ display: "none" }}
                      />
                      <span>Add Images</span>
                    </label>
                  </div>
                )}
                {step === 2 && (
                  <div className="w-full h-fit p-3 shadow-2xl rounded-lg flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1.5 items-center ">
                        <FaRegCheckCircle className="text-lg text-hoverColor" />
                        <span className="text-[17px]">
                          3. Add Non-veg Toppings
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <SecondaryButton text="Edit" />
                        <button className="border border-errorColor rounded-full  font-bold px-3 text-[12px]">
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="text-sm">
                      Peri - Peri Chicken | Chicken Pepperoni | Grilled Chicken
                      Rasher | Chicken Sausage | Chicken Tikka | Pepper Barbecue
                      Chicken |
                    </div>
                  </div>
                )}
              </Form>
            </SidebarField>
          )}
        </Formik>
      )}

      {visible && (
        <SubCategoryForm
          handleSubmit={handleSubmit}
          handleClose={handleClose}
          initialValues={{ name: "", number: "", user_visibility: false }}
        />
      )}

      {editVisible && (
        <SubCategoryForm
          handleSubmit={handleSubmit}
          handleClose={() => setEditVisible(false)}
          initialValues={{ name: "", number: "", user_visibility: false }}
        />
      )}

      {addModifier && (
        <SidebarField
          button1={""}
          button2={
            <Button
              text="Back "
              type="submit"
              onClick={() => setAddModifier(false)}
            />
          }
          handleClose={() => setAddModifier(false)}
          title="Add New Item"
        >
          <ul>
            {[
              { id: 1, name: "Select Crust" },
              { id: 2, name: "Add Non-veg Toppings" },
              { id: 3, name: "Extra Cheese" },
              { id: 4, name: "Select Size" },
              { id: 5, name: "Ice Cream" },
              { id: 6, name: "Butter" },
              { id: 7, name: "Toppings" },
              { id: 8, name: "Extra Chatni" },
            ].map((item, i) => {
              return (
                <li
                  className="p-3 border-t text-buttonColor cursor-pointer"
                  onClick={() => handleUpdateModifier(item)}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </SidebarField>
      )}

      {updateModifier != null && (
        <SidebarField
          button1={
            <Button
              text="Back "
              type="submit"
              onClick={() => handleUpdateModifier(null)}
            />
          }
          button2={
            <Button text="Update " type="submit" onClick={handleSubmit} />
          }
          handleClose={() => handleUpdateModifier(null)}
          title="Add New Item"
        >
          <Formik
            initialValues={{
              modifier_group_type: "",
              modifier_sequence_number: "",
              modifier_range: "",
              modifier_min_range: "",
              modifier_max_range: "",
              can_user_add_modifier_quantity: false,
              associate_modifier_settings: false,
              select_will_be_shown_to_users: true,
              default_select: true,
              selected_modifiers: [],
            }}
          >
            {({ handleSubmit, handleChange, values }) => (
              <Form className="p-2 flex flex-col gap-4">
                <h1 className="border-b pb-2 text-lg ">
                  {updateModifier.name}
                </h1>
                <div className="flex justify-between w-full gap-3">
                  <div className="w-full">
                    <Lable lable={"Modifier Group Type"} />
                    <Dropdown
                      name="modifier_group_type"
                      value={values.modifier_group_type}
                      options={[
                        { id: "1", label: "Select", value: "Select" },
                        {
                          id: "2",
                          label: "Select Range",
                          value: "Select Range",
                        },
                      ]}
                    />
                  </div>
                  <div className="w-full">
                    <Lable lable={"Modifier Sequence Number"} />
                    <TextInput
                      type="number"
                      value={values.modifier_sequence_number}
                      name="modifier_sequence_number"
                      placeholder={"0"}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  {true ? (
                    <div>
                      <Lable lable={"Modifier Range"} />
                      <TextInput
                        type="number"
                        value={values.modifier_range}
                        name="modifier_range"
                        placeholder={"0"}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div className="flex justify-between w-full gap-3">
                      <div className="w-full">
                        <Lable lable={"Modifier Min Range"} />
                        <TextInput
                          type="number"
                          value={values.modifier_min_range}
                          name="modifier_range"
                          placeholder={"0"}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="w-full">
                        <Lable lable={"Modifier Max Range"} />
                        <TextInput
                          type="number"
                          value={values.modifier_max_range}
                          name="modifier_range"
                          placeholder={"0"}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <ToggleField
                    text="Can User Add Modifier Quantity ?"
                    name={"can_user_add_modifier_quantity"}
                  />
                </div>
                <div className="pb-2 border-b">
                  <ToggleField
                    text="Associate Modifier Settings"
                    name={"associate_modifier_settings"}
                  />
                </div>
                <div className="pb-2 border-b flex justify-between">
                  <span>Modifier Selection</span>
                  <span className="text-red-600 ">Optional</span>
                </div>
                <div className="flex justify-start gap-4 pb-2 border-b">
                  <div>
                    <ToggleField
                      text="Selected will be shown to users"
                      name={"select_will_be_shown_to_users"}
                    />
                  </div>
                  <div>
                    <ToggleField
                      text="Default Selected"
                      name={"default_select"}
                    />
                  </div>
                </div>
                {[
                  {
                    id: 1,
                    text: "Grilled Mushrooms",
                    isChecked: false,
                    boxValue: "",
                    isSelected: false,
                  },
                  {
                    id: 2,
                    text: "Onion",
                    isChecked: false,
                    boxValue: "",
                    isSelected: false,
                  },
                  {
                    id: 3,
                    text: "Crisp Capsicum",
                    isChecked: false,
                    boxValue: "",
                    isSelected: false,
                  },
                  {
                    id: 4,
                    text: "Fresh Tomato",
                    isChecked: false,
                    boxValue: "",
                    isSelected: false,
                  },
                  {
                    id: 5,
                    text: "Paneer",
                    isChecked: false,
                    boxValue: "",
                    isSelected: false,
                  },
                ].map((item, i) => {
                  return (
                    <div
                      key={item.id}
                      className="flex justify-between items-center"
                    >
                      <div className="flex gap-3 items-center">
                        {" "}
                        <input type="checkbox" />
                        <span>{item.text}</span>
                      </div>
                      <div className="flex gap-3 items-center">
                        <TextInput placeholder="0" />
                        <span>
                          <input type="radio" />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </Form>
            )}
          </Formik>
        </SidebarField>
      )}
    </>
  );
};

const SubCategoryForm = ({ initialValues, handleSubmit, handleClose }) => (
  <Formik initialValues={initialValues} onSubmit={handleSubmit}>
    {({ handleChange, values }) => (
      <SidebarField
        button1={<Button text="Cancel" type="button" onClick={handleClose} />}
        button2={<Button text="Submit" type="submit" />}
        handleClose={handleClose}
        title={values.name ? "Edit Sub Category" : "Add New Sub Category"}
      >
        <Form className="w-full gap-4 flex flex-col bg-transparent py-5 px-3">
          <FormField label="Sub Category Name">
            <TextInput
              name="name"
              type="text"
              placeholder="Sub Category Name"
              onChange={handleChange}
              value={values.name}
            />
            <ErrorMessage name="name" component="div" className="error" />
          </FormField>
          <FormField label="Sequence Number">
            <TextInput
              name="number"
              type="number"
              placeholder="Sequence Number"
              onChange={handleChange}
              value={values.number}
            />
            <ErrorMessage name="number" component="div" className="error" />
          </FormField>
          <ToggleField
            text="Is subcategory visible to user?"
            name="user_visibility"
            onChange={handleChange}
            value={values.user_visibility}
          />
        </Form>
      </SidebarField>
    )}
  </Formik>
);



export default ItemList;
