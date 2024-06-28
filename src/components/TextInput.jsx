// components/TextInput.jsx

import { useSelector } from "react-redux";


const TextInput = ({ name, type, placeholder, value, onChange , disabled}) => {
  const {theme} = useSelector((state)=> state.theme)
    
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      disabled={disabled}
      className={`${theme === 'light' ? '':'bg-darkInput '} border p-2  text-sm w-full `}
    />
 
  );
};

export default TextInput;
