import { ErrorMessage, Form, Formik } from "formik";
import React, { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Dropdown from "../../components/Dropdown";
import Lable from "../../components/Lable";
import Phone from "../../components/Phone";
import SidebarRight from "../../components/Sidebar/SidebarRight";
import TextInput from "../../components/TextInput";
import { createOrderSchem } from "../../validationSchema/ValidationSchema";

const CreateOrder = () => {
  const [toggle, setToggle] = useState(false);

  const store = [
    { id: "1", label: "Hundi Biryani", value: "Hundi Biryani" },
    { id: "2", label: "Non Veg Pizzas", value: "Non Veg Pizzas" },
    { id: "2", label: "Veg Pizzas", value: "Veg Pizzas" },
    { id: "2", label: "Burgers", value: "Burgers" },
    { id: "2", label: "Veg Biryani", value: "Veg Biryani" },
    { id: "2", label: "Chicken Biryani", value: "Chicken Biryani" },
    { id: "2", label: "Energy Drink", value: "Energy Drink" },
    { id: "2", label: "Cold Drink", value: "Cold Drink" },
    { id: "2", label: "Lassi", value: "Lassi" },
    { id: "2", label: "Non-Veg Roll", value: "Non-Veg Roll" },
  ];

  const vehical = [{ id: "1", label: "Bike", value: "Bike" }];

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
    {
      id: "3",
      name: "Chicken Pepperoni",
      img: "https://apiedelivery.elluminatiinc.net/store_items/660d51387b5d464723699c02PEWK.jpg",
    },
    {
      id: "4",
      name: "Chicken Fiesta",
      img: "https://apiedelivery.elluminatiinc.net/store_items/660d51387b5d464723699c02PEWK.jpg",
    },
    {
      id: "5",
      name: "Chicken Dominator",
      img: "https://apiedelivery.elluminatiinc.net/store_items/660d51387b5d464723699c02PEWK.jpg",
    },
    {
      id: "6",
      name: "Pepper Barbecue Chicken",
      img: "https://apiedelivery.elluminatiinc.net/store_items/660d51387b5d464723699c02PEWK.jpg",
    },
    {
      id: "7",
      name: "Chicken Sausage",
      img: "https://apiedelivery.elluminatiinc.net/store_items/660d51387b5d464723699c02PEWK.jpg",
    },
    {
      id: "8",
      name: "Pepper Barbecue & Onion",
      img: "https://apiedelivery.elluminatiinc.net/store_items/660d51387b5d464723699c02PEWK.jpg",
    },
  ];

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    deliveryNote: "",
  };

  const initialValuesParcel = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    price: "",
    address: "",
    vehical: "",
    deliveryNote: "",
  };

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="flex justify-between">
      <div className="lg:w-9/12 p-10">
        <div className="flex justify-between items-center flex-wrap mb-2">
          <BreadCrumb title={"Create Order"} />
          {toggle ? (
            <Button
              text="Delivery Parcel"
              type="button"
              className="float-end"
              onClick={handleClick}
            />
          ) : (
            <Button
              text="Create Order"
              type="button"
              className="float-end"
              onClick={handleClick}
            />
          )}
        </div>

        {/* <div className={`border-b-2 border-b-darkSecondary mb-10 pb-2`}>
          <FilterDropdown options={store} />
        </div> */}

        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {cardData.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>

      {toggle ? (
        <SidebarRight>
          <h1 className="mb-10">Your Cart</h1>
          <div className="flex justify-between mb-10 border-b-black-2">
            <span>ITEM</span>
            <span>PRICE</span>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={createOrderSchem}
            onSubmit={handleSubmit}
          >
            {({ handleChange, values }) => (
              <Form className="w-full gap-4 flex flex-col ">
                <div>
                  <Lable lable="First Name" />

                  <TextInput
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={values.firstName}
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <Lable lable="Last Name" />

                  <TextInput
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={values.lastName}
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <Lable lable="Email" />

                  <TextInput
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <Lable lable="Phone" />
                  <Phone value={values.phone} name="phone" />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <Lable lable="Address" />

                  <TextInput
                    name="address"
                    type="text"
                    placeholder="Address"
                    onChange={handleChange}
                    value={values.address}
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <Lable lable="Delivery Note" />

                  <TextInput
                    name="deliveryNote"
                    type="text"
                    placeholder="Delivery Note"
                    onChange={handleChange}
                    value={values.deliveryNote}
                  />
                  <ErrorMessage
                    name="deliveryNote"
                    component="div"
                    className="error"
                  />
                </div>

                <Button type="submit" text="checkout" />
              </Form>
            )}
          </Formik>
        </SidebarRight>
      ) : (
        <SidebarRight>
          <Formik
            initialValues={initialValuesParcel}
            validationSchema={createOrderSchem}
            onSubmit={handleSubmit}
          >
            {({ handleChange, values }) => (
              <Form className="w-full gap-4 flex flex-col ">
                <div>
                  <Lable lable="First Name" />

                  <TextInput
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={values.firstName}
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <Lable lable="Last Name" />

                  <TextInput
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={values.lastName}
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <Lable lable="Email" />

                  <TextInput
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <Lable lable="Phone" />

                  <Phone value={values.phone} name="phone" />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <Lable lable="Price" />

                  <TextInput
                    name="price"
                    type="text"
                    placeholder="price"
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
                  <Lable lable="Address" />

                  <TextInput
                    name="address"
                    type="text"
                    placeholder="Address"
                    onChange={handleChange}
                    value={values.address}
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <Lable lable="Vehicle" />
                  <Dropdown
                    options={vehical}
                    name="vehical"
                    value={values.vehical}
                  />
                  <ErrorMessage
                    name="vehical"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <Lable lable="Delivery Note" />

                  <TextInput
                    name="deliveryNote"
                    type="text"
                    placeholder="Delivery Note"
                    onChange={handleChange}
                    value={values.deliveryNote}
                  />
                  <ErrorMessage
                    name="deliveryNote"
                    component="div"
                    className="error"
                  />
                </div>

                <Button type="submit" text="checkout" />
              </Form>
            )}
          </Formik>
        </SidebarRight>
      )}
      
    </div>
  );
};

export default CreateOrder;


