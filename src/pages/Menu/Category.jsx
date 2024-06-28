import { ErrorMessage, Form, Formik } from "formik";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import BreadCrumb from "../../components/BreadCrumb";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import { FormField } from "../../components/FormField";
import SidebarField from "../../components/Sidebar/SidebarField";
import TextInput from "../../components/TextInput";
import ToggleField from "../../components/ToggleField";
import ToggleRightField from "../../components/ToggleRightField";
import { FaSearch } from "react-icons/fa";
import Lable from "../../components/Lable";

const Category = () => {
  const data = [
    {
      name: "Pizza",
      imgUrl:
        "https://apiedelivery.elluminatiinc.net/store_products_group/660d51387b5d464723699b8b.jpg",
    },
    {
      name: "Burger",
      imgUrl: "",
    },
    {
      name: "Biryani",
      imgUrl:
        "https://apiedelivery.elluminatiinc.net/store_products_group/66387d536e53dcad4fbe8a35Ih0k.jpg",
    },
    {
      name: "Drinks",
      imgUrl:
        "https://apiedelivery.elluminatiinc.net/store_products_group/6639bb30479b8b75e11f028bHxt7.jpg",
    },
    {
      name: "Roll",
      imgUrl:
        "https://apiedelivery.elluminatiinc.net/store_products_group/663b73e225d86be04425198b75BF.jpg",
    },
    {
      name: "South Indian Dish",
      imgUrl:
        "https://apiedelivery.elluminatiinc.net/store_products_group/66616967602745c3601823e4e1gs.jpg",
    },
  ];

  const [visible, setVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((item) => {
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
        <BreadCrumb title="Category" />
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
          <Card item={item} key={item.id} handleOpen={handleOpen} />
        ))}
      </div>

      {visible ? (
        <Formik initialValues={{}} onSubmit={handleSubmit}>
          {({ handleChange, values, handleSubmit }) => (
            <SidebarField
              handleClose={handleClose}
              title="Add New Category"
              button1={
                <Button text="Cancel" type="button" onClick={handleClose} />
              }
              button2={<Button text="Submit" onClick={handleSubmit} />}
            >
              <Form className="w-full gap-4 flex flex-col bg-transparent py-5 px-3">
                <FormField label="Category Name">
                  <div className="flex items-center">
                    <span className="border p-2 pl-3 pr-5 text-sm border-r-none">
                      EN
                    </span>
                    <TextInput
                      name="name"
                      type="text"
                      placeholder="Category"
                      value={values.name}
                      onChange={handleChange}
                    />
                  </div>
                  <ErrorMessage name="name" component="div" className="error" />
                </FormField>

                <img
                  src="https://storeedelivery.elluminatiinc.net/assets/img/default_images/category.png"
                  alt="category-item"
                />

                <span className="text-[12px] text-gray-400 my-10 flex w-full">
                  <label htmlFor="image-upload" className="w-full flex">
                    <TextInput
                      type="file"
                      placeholder="Choose File"
                      id="image-upload"
                    />
                    <button className="border  px-5" id="image-upload">
                      Browse
                    </button>
                  </label>
                  <button className="border px-5">Upload</button>
                </span>

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
                <FormField label="Sequence Number">
                  <TextInput
                    name="sequence_number"
                    type="number"
                    value={values.sequence_number}
                    onChange={handleChange}
                  />
                </FormField>
                <ToggleField
                  text="Is category visible to user?"
                  name="user_visibility"
                />
                <Lable lable={"Category Time Settings"} />
                {[
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thirsday",
                  "Friday",
                  "Saturday",
                ].map((item) => (
                  <ToggleRightField
                    text={item}
                    subtext={"Open Full Day"}
                    border={true}
                    padding={true}
                    subtextoption={true}
                  />
                ))}
              </Form>
            </SidebarField>
          )}
        </Formik>
      ) : null}
    </div>
  );
};

export default Category;

const Card = ({ item, handleOpen }) => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div
      className={` rounded-xl shadow-2xl cursor-pointer ${
        theme === "light"
          ? "bg-secondaryColor text-textColorLight"
          : "bg-darkThirsary text-darkSecondary"
      }`}
      onClick={handleOpen}
    >
      <img
        src={
          item.imgUrl
            ? item.imgUrl
            : "https://storeedelivery.elluminatiinc.net/assets/img/default_images/category.png"
        }
        alt="category_image"
        className="rounded-t-xl "
      />
      <h1 className="p-4">{item.name}</h1>
    </div>
  );
};
