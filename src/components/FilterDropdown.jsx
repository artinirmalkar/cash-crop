// components/FilterDropdown.jsx
import React from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
// import { useFormikContext } from "formik";

const FilterDropdown = ({ options, name, value }) => {
  const { theme } = useSelector((state) => state.theme);
  //   const { setFieldValue } = useFormikContext();

  //   const handleSelectChange = (selectedOption) => {
  //     setFieldValue(name, selectedOption.id);
  //   };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? "none " : "1px solid #d7d7d7",
      color: "#fff",
      borderRadius: "20px",
      padding: "0px 10px",
      backgroundColor: "transparent",
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
      //   onChange={handleSelectChange}
      //   value={options.find((option) => option.value === value)}
      className="w-40 text-[12px] "
      styles={customStyles}
    />
  );
};

export default FilterDropdown;
