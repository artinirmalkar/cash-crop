import { useFormikContext } from "formik";
import React, { useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const ToggleField = ({ text, name }) => {
  const { setFieldValue } = useFormikContext();

  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
    toggle ? setFieldValue(name, false) : setFieldValue(name, true);
  };

  return (
    <label
      className="flex gap-2 cursor-pointer "
      for="toggle"
      onClick={handleClick}
    >
      {toggle ? (
        <FaToggleOn className=" hover:text-hoverColor text-xl" id="toggle" />
      ) : (
        <FaToggleOff className=" hover:text-hoverColor text-xl" id="toggle" />
      )}
      {text}
    </label>
  );
};

export default ToggleField;
