// components/Textarea.jsx

import { useSelector } from "react-redux";

const Textarea = ({ name, type, placeholder, value, onChange }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <textarea
      rows={3}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={`${
        theme === "light" ? "" : "bg-darkInput "
      } border p-2  text-sm w-full `}
    />
  );
};

export default Textarea;
