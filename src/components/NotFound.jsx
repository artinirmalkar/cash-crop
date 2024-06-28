import React from "react";
import logo from "../assest/logo.png";
import loginregister from "../assest/register_login.png";
import { useNavigate } from "react-router-dom";


const NotFound = () => {
  const navigate = useNavigate()

  const handleNavigation = async () => {
    navigate('store/dashboard')
  };
  
  return (
    <div className="register h-screen flex items-center justify-center">
      <div className="md:w-[90%] lg:w-[60%] md:m-auto md:my-10 m-5 bg-white shadow-2xl rounded-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl text-slate-600 font-semibold">
            GEAR UP YOUR
          </h1>
          <h1 className="text-slate-400 text-3xl font-semibold">
            BUSINESS
          </h1>
          <img
            src={loginregister}
            className="hidden md:block"
            alt="This is a Banner for store login or register"
            layout="responsive"
            width={500}
            height={500}
          />
        </div>

        <div className="flex flex-col items-start justify-center">
          <img src={logo} height={100} width={100} alt="Logo" />
          <span>Ooops... looks like an error occurred!</span>
          <h1 className="text-[5rem] text-slate-800 font-bold my-3">404</h1>
          <button onClick={()=>handleNavigation()} text="Go to home"   className=" bg-secondaryColor  text-secondaryColor uppercase px-10 py-2 rounded-full text-sm font-bold" >GO TO HOME</button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
