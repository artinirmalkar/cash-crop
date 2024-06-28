import React from "react";
import { useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";

const SidebarField = ({ children, button1, button2, title, handleClose }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div
      className={`${
        theme === "light"
          ? "bg-secondaryColor text-textColorLight"
          : "bg-darkThirsary text-darkSecondary"
      }  lg:w-[35rem] w-[100%] text-sm h-screen fixed right-0 top-0 shadow-2xl z-10 flex flex-col justify-between`}
    >
      <header className="border-b p-5 flex justify-between items-center text-lg">
        <div>{title}</div>
        <div className="cursor-pointer" onClick={handleClose}>
          <IoClose />
        </div>
      </header>
      <main className="overflow-y-auto  p-3 w-full h-full">{children}</main>
      <footer className="border-t p-5 flex justify-center items-center gap-1">
        {button1}
        {button2}
      </footer>
    </div>
  );
};

export default SidebarField;
