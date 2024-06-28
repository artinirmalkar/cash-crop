'use client'
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSelector } from "react-redux";

const PasswordInput = ({ name, placeholder, value, onChange }) => {
  
  const {theme} = useSelector((state)=> state.theme)
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-between border  pr-2  text-sm w-full">
      <input
        name={name}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${theme === 'light' ? '':'bg-darkInput '} border w-full p-2`}
      />
      <span
        onClick={togglePasswordVisibility}
        className={`cursor-pointer w-2 flex items-center justify-center ${theme === 'light' ? 'text-slate-500':'text-white '} `}
      >
        {showPassword ?  <FaEye />:<FaEyeSlash /> }
      </span>
    </div>
  );
};

export default PasswordInput;
