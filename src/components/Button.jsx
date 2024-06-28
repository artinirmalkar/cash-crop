import React from "react";

const Button = ({ type, text, onClick }) => {
  return (
    <button
      type={type}
      className={`${text === 'Cancel' ? ' border border-buttonColor hover:bg-buttonColor hover:text-secondaryColor': 'hover:bg-hoverColor bg-buttonColor text-secondaryColor'}   capitalize px-10 py-2 rounded-full text-sm font-bold w-fit h-fit`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const SecondaryButton = ({  text, onClick, padding, textColor, borderColor }) => {
  return (
    <button
      type='button'
      className={` border  ${borderColor ? borderColor : 'border-buttonColor'}  ${textColor ? textColor : 'text-buttonColor'} hover:bg-buttonColor hover:text-secondaryColor  capitalize font-bold  text-[12px] rounded-full h-fit w-fit ${padding ? padding : 'px-3'}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
