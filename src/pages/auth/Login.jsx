import { ErrorMessage, Form, Formik } from "formik";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { loginValidationSchema } from "../../validationSchema/ValidationSchema";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import Phone from "../../components/Phone";
import Lable from "../../components/Lable";
import Dropdown from "../../components/Dropdown";
import PasswordInput from "../../components/PasswordInput";
import { useDispatch, useSelector } from "react-redux";
import { storeLogin } from "../../store/slices/storeSlice";

const Login = () => {
  const dispatch = useDispatch()
  const {theme} = useSelector((state)=> state.theme)
  const [toggle, setToggle] = useState(false);

  const initialValues = {
    phone: "",
    email: "",
    password: "",
    store: "",
  };

  const store = [
    { id: "1", label: "Store", value: "Store" },
    { id: "2", label: "Substore", value: "Substore" },
  ];

  const handleSubmit = async (values) => {
    dispatch(storeLogin(values))
  };

  return (
    <>
      <div className={`flex gap-2`}>
        <button
          onClick={() => setToggle(false)}
          className={`${!toggle ? "active" : `${theme === 'light' ? "bg-secondaryColor text-textColorLight" : "bg-darkPrimary text-darkSecondary"}`}`}
        >
          Phone
        </button>
        <span> | </span>
        <button
          onClick={() => setToggle(true)}
          className={`${toggle ? "active" : `${theme === 'light' ? "bg-secondaryColor text-textColorLight" : "bg-darkPrimary text-darkSecondary"}`}`}
        >
          Email
        </button>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, values }) => (
          <Form className="mt-12">
            {!toggle ? (
              <div className="gap-3  grid grid-cols-1 sm:grid-cols-2 items-center mb-3">
                <Lable lable="Phone" />
                <div>
                  <Phone value={values.phone} name="phone" />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="error"
                  />
                </div>
              </div>
            ) : (
              <div className="gap-3  grid grid-cols-1 sm:grid-cols-2 items-center mb-3">
                <Lable lable="Email" />
                <div>
                  <TextInput
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    onChange={handleChange}
                    value={values.email ? values.email : ""}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
              </div>
            )}
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
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>
            </div>
            <div className="gap-3  grid grid-cols-1 sm:grid-cols-2 items-center mb-3">
              <Lable lable="Store" />
              <div>
                <Dropdown options={store} name="store" value={values.store} />
                <ErrorMessage name="store" component="div" className="error" />
              </div>
            </div>
            <div className="mt-8 flex gap-4 justify-between flex-wrap">
              <NavLink to={"forgot-password"} className="active">
                Forgot Password
              </NavLink>
              <Button text={"signin"} type={"submit"} />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
