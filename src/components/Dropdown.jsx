// components/Dropdown.jsx
import React from "react";
import Select from "react-select";
import { useFormikContext } from "formik";
import { useSelector } from "react-redux";

const Dropdown = ({ options, name, value }) => {
  const {theme} = useSelector((state)=> state.theme)
  const { setFieldValue } = useFormikContext();

  const handleSelectChange = (selectedOption) => {
    setFieldValue(name, selectedOption.id);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? "none " : theme === "light" ? '1px solid #cccccc' : '1px solid #fff',
      color: "#fff",
      padding: "0px 10px",
      backgroundColor: theme === "light" ? "#fff" : "#232223",
      borderRadius : 'none',
      "&:hover": {
        color: "#fff",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused
      ? "#00365a"
      : theme === "light"
      ? "white"
      : "#313131",
    color: state.isFocused ? "#fff" : theme === "light" ? "#000" : "#fff",
    padding: "10px",

    "&:hover": {
      backgroundColor: "#00365a",
      color: "#fff",
    },
    }),
  };

  return (
    <Select
      options={options}
      onChange={handleSelectChange}
      value={options.find((option) => option.value === value)}
      className="w-full text-sm"
      styles={customStyles}
    />
  );
};

export default Dropdown;
