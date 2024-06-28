import React, { useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const ToggleRightField = ({
  text,
  subtext,
  border,
  padding,
  subtextoption,
}) => {
  //   const { setFieldValue } = useFormikContext();

  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
    // toggle ? setFieldValue(name, false) : setFieldValue(name, true);
  };

  return (
    <div
      className={`text-sm   w-full ${padding ? "" : "py-3"} ${
        border ? "" : "border-b"
      }`}
    >
      <div className="flex justify-between items-center">
        <div>{text}</div>
        <div className="flex justify-between gap-40">
          {subtextoption ? <div>{subtext}</div> : ""}
          <span onClick={handleClick} className="cursor-pointer">
            {toggle ? (
              <FaToggleOn
                className=" hover:text-hoverColor text-xl"
                id="toggle"
              />
            ) : (
              <FaToggleOff
                className=" hover:text-hoverColor text-xl"
                id="toggle"
              />
            )}
          </span>
        </div>
      </div>
      {subtextoption ? "" : <div className="text-[11px]">{subtext}</div>}
    </div>
  );
};

export default ToggleRightField;
