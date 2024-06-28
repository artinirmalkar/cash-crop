import React from "react";
import { ErrorMessage, Formik, Form } from "formik";
import { registerValidationSchema } from "../../validationSchema/ValidationSchema";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import Phone from "../../components/Phone";
import PasswordInput from "../../components/PasswordInput";
import Dropdown from "../../components/Dropdown";
import Lable from "../../components/Lable";

const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    country: "",
    city: "",
    deliveryBusiness: "",
    phone: "",
    password: "",
    referralCode: "",
    address: "",
  };

  const country = [
    { id: "1", label: "USA", value: "USA" },
    { id: "2", label: "UK", value: "UK" },
    { id: "3", label: "Canada", value: "Canada" },
  ];
  const city = [
    { id: "1", label: "New York", value: "New York" },
    { id: "2", label: "London", value: "London" },
    { id: "3", label: "Toronto", value: "Toronto" },
  ];
  const deliveryBusiness = [
    { id: "1", label: "UPS", value: "UPS" },
    { id: "2", label: "FedEx", value: "FedEx" },
    { id: "3", label: "DHL", value: "DHL" },
  ];

  const handleSubmit = (values) => {
    console.log("payload", values);
  };
  const hanldeReferral = (values) => {
    console.log("hanldeReferral", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, values }) => (
        <Form className="mt-12">
          <div className="gap-3  grid grid-cols-1 sm:grid-cols-2 items-center mb-3">
            <Lable lable="Name" />
            <div>
              <TextInput
                name="name"
                type="text"
                placeholder="Name"
                onChange={handleChange}
                value={values.name}
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
          </div>
          <div className="gap-3  grid grid-cols-1 sm:grid-cols-2 items-center mb-3">
            <Lable lable="E-Mail" />
            <div>
              <TextInput
                name="email"
                type="email"
                placeholder="E-mail"
                onChange={handleChange}
                value={values.email}
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
          </div>
          <div className="gap-3  grid grid-cols-1 sm:grid-cols-2 items-center mb-3">
            <Lable lable="Country" />
            <div>
              <Dropdown
                options={country}
                name="country"
                value={values.country}
              />
              <ErrorMessage name="country" component="div" className="error" />
            </div>
          </div>
          <div className="gap-3  grid grid-cols-1 sm:grid-cols-2 items-center mb-3">
            <Lable lable="City" />
            <div>
              <Dropdown options={city} name="city" value={values.city} />
              <ErrorMessage name="city" component="div" className="error" />
            </div>
          </div>
          <div className="gap-3  grid grid-cols-1 sm:grid-cols-2 items-center mb-3">
            <Lable lable="Delivery Business" />
            <div>
              <Dropdown
                options={deliveryBusiness}
                name="deliveryBusiness"
                value={values.deliveryBusiness}
              />
              <ErrorMessage
                name="deliveryBusiness"
                component="div"
                className="error"
              />
            </div>
          </div>
          <div className="gap-3  grid grid-cols-1 sm:grid-cols-2 items-center mb-3">
            <Lable lable="Phone" />
            <div>
              <Phone value={values.phone} name="phone" />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>
          </div>
          <div className="gap-3  grid grid-cols-1 sm:grid-cols-2 items-center mb-3">
            <Lable lable="Password" />
            <div>
              <PasswordInput
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value={values.password}
                autoComplete
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
          </div>
          <div className="gap-3  grid grid-cols-1 sm:grid-cols-2 items-center mb-3">
            <Lable lable="Referral Code" />
            <div>
              <div className="flex">
                <TextInput
                  name="referralCode"
                  type="text"
                  placeholder="Referral Code"
                  onChange={handleChange}
                  value={values.referralCode}
                />
                <button
                  className=" bg-buttonColor text-secondaryColor uppercase px-4 text-xs font-bold rounded-r-full"
                  onSubmit={hanldeReferral}
                >
                  Apply
                </button>
              </div>
              <ErrorMessage
                name="referralCode"
                component="div"
                className="error"
              />
            </div>
          </div>
          <div className="gap-3  grid grid-cols-1 sm:grid-cols-2 items-center mb-3">
            <Lable lable="Address" />
            <div>
              <TextInput
                name="address"
                type="text"
                placeholder="Address"
                onChange={handleChange}
                value={values.address}
              />
              <ErrorMessage name="address" component="div" className="error" />
            </div>
          </div>
          <div className="flex gap-2 mt-4 items-center bg-red-800">
            <input type="checkbox" className="mb-2"/>
            <Lable
              lable={"I agree to the Terms & Conditions And Privacy Policy"}
            />
          </div>
          <div className="mt-8">
            <Button text={"signup"} type={"submit"} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
