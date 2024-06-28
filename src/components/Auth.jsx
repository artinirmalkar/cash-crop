import React from "react";
import logo from "../assest/logo.png";
import loginregister from "../assest/register_login.png";
import { NavLink, Outlet } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useSelector } from "react-redux";

const Auth = () => {

const {theme} = useSelector((state)=> state.theme)

  return (
    <div className={`register md:h-screen flex items-center justify-center`}>
      <div className={` ${theme === "light" ? "bg-secondaryColor text-textColorLight" : "bg-darkPrimary "}  md:w-[90%] lg:w-[65%] md:m-auto md:my-10 m-5 shadow-2xl rounded-lg p-10 grid grid-cols-1 lg:grid-cols-2 gap-10`}>
        <div className="">
          <h1 className="text-3xl text-slate-600 font-semibold">
            GEAR UP YOUR
          </h1>
          <h1 className="text-slate-400 text-3xl font-semibold bottom-0 left-0">
            BUSINESS
          </h1>
          <img
            src={loginregister}
            className="hidden lg:block"
            alt="This is a Banner for store login or register"
          />
        </div>

        <div>
          <img src={logo} alt="Logo" width={50} />

          <div>
            <div className="flex mt-3 gap-2 items-center text-lg">
              <NavLink
                to={""}
                className={({ isActive }) => (isActive ? "active" : `${theme === 'light' ? "bg-secondaryColor text-textColorLight" : "bg-darkPrimary text-darkSecondary"}`)}
              >
                Login
              </NavLink>
              <span> | </span>
              <NavLink
                to={"register"}
                className={({ isActive }) => (isActive ? "active" : `${theme === 'light' ? "bg-secondaryColor text-textColorLight" : "bg-darkPrimary text-darkSecondary"}`)}
              >
                Register
              </NavLink>
            </div>
            <div className={`flex flex-col items-center justify-center gap-5 my-10 ${theme === 'light' ? "" : " text-darkSecondary"}`}>
              <FcGoogle className="text-4xl cursor-pointer" />
              OR
            </div>
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Auth;
