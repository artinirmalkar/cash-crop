import React, { useEffect, useRef, useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineFullscreen } from "react-icons/ai";
import { SlNotebook } from "react-icons/sl";
import { GiCoins } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";
import logo from "../assest/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storeLogout } from "../store/slices/storeSlice";
import { CiMenuKebab } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { setToggleTheme } from "../store/slices/themeSlice";

const Topbar = ({ handleSidebar }) => {
  const profileRef = useRef(null);
  const menuRef = useRef(null);

  const dispatch = useDispatch();

  const { theme } = useSelector((state) => state.theme);

  const [showProfile, setShowProfile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDark = () => {
    dispatch(setToggleTheme("dark"));
  };

  const handleLight = () => {
    dispatch(setToggleTheme("light"));
  };

  return (
    <div
      className={`${
        theme === "light"
          ? "bg-secondaryColor text-textColorLight"
          : "bg-darkThirsary text-darkSecondary"
      } shadow-md h-16 w-full flex items-center justify-between px-5 py-12 fixed z-10`}
    >
      <div className="cursor-pointer flex" onClick={handleSidebar}>
        <CiMenuKebab className="font-bold" />
        <CiMenuBurger className="font-bold" />
      </div>
      <div>
        <img src={logo} alt="Logo" width={50} />
      </div>
      <div className="flex gap-3 text-xl items-center">
        <div className="hidden md:flex gap-3 text-xl items-center">
          {theme === "light" ? (
            <FaToggleOff
              className="cursor-pointer hover:text-hoverColor text-3xl"
              onClick={handleDark}
            />
          ) : (
            <FaToggleOn
              className="cursor-pointer hover:text-hoverColor text-3xl"
              onClick={handleLight}
            />
          )}
          <div onClick={() => setShowMenu(!showMenu)}>
            <AiOutlineAppstore className="cursor-pointer relative hover:text-hoverColor" />
            {showMenu ? <MenuDD ref={menuRef} /> : null}
          </div>
          <AiOutlineFullscreen
            className="cursor-pointer hover:text-hoverColor"
            onClick={toggleFullScreen}
          />
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer hover:text-hoverColor "
          onClick={() => setShowProfile(!showProfile)}
        >
          <span className="text-sm text-bluefont hidden md:flex ">
            Arti Nirmalkar
          </span>
          <div className="relative ">
            <img
              src={logo}
              alt="Logo"
              width={40}
              className=" rounded-full border "
            />
            {showProfile ? <ProfileDD ref={profileRef} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

const ProfileDD = React.forwardRef((props, ref) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { theme } = useSelector((state) => state.theme);
  const handleLogout = async () => {
    const payload = { payload: null, token: false };
    dispatch(storeLogout(payload));
  };
  return (
    <div
      ref={ref}
      className={` ${
        theme === "light"
          ? "bg-secondaryColor text-textColorLight"
          : "bg-darkPrimary text-darkSecondary"
      } border absolute right-0 shadow-sm mt-2 rounded-lg text-sm w-44`}
    >
      <ul>
        <li
          className={`cursor-pointer py-2 px-4 ${
            theme === "light" ? "hover:bg-[#f8f8f8]" : "hover:bg-thirsaryColor"
          }`}
          onClick={() => navigate("profile")}
        >
          Account
        </li>
        <li
          className={`cursor-pointer py-2 px-4 ${
            theme === "light" ? "hover:bg-[#f8f8f8]" : "hover:bg-thirsaryColor"
          }`}
          onClick={() => navigate("offers")}
        >
          Offers
        </li>
        <li
          className={`cursor-pointer py-2 px-4 ${
            theme === "light" ? "hover:bg-[#f8f8f8]" : "hover:bg-thirsaryColor"
          }`}
          onClick={() => navigate("history/history-list")}
        >
          History
        </li>
      </ul>
      <div
        className={`border-t cursor-pointer py-2 px-4 ${
          theme === "light" ? "hover:bg-[#f8f8f8]" : "hover:bg-thirsaryColor"
        }`}
        onClick={handleLogout}
      >
        Sign Out
      </div>
    </div>
  );
});

const MenuDD = React.forwardRef((props, ref) => {
  const { theme } = useSelector((state) => state.theme);
  const navigate = useNavigate();
  return (
    <div
      ref={ref}
      className={`${
        theme === "light"
          ? "bg-secondaryColor text-textColorLight"
          : "bg-darkPrimary text-darkSecondary"
      } border top-10 mt-5 right-40 mr-10  absolute  shadow-sm  rounded-lg text-sm w-fit `}
    >
      <div className="flex">
        <div
          className="lg:flex hidden   py-4 px-6 gap-2 items-center border-b  border-slate-100 flex-col cursor-pointer  hover:text-hoverColor hover:font-semibold"
          onClick={() => navigate("order/today-orders")}
        >
          <p className="text-3xl">
            <SlNotebook />
          </p>
          <p className="text-[12px]">Order</p>
        </div>
        <div
          className="lg:flex hidden   py-4 px-6 gap-2  items-center border-b  border-slate-100 flex-col cursor-pointer text-secondaryfont hover:text-hoverColor hover:font-semibold"
          onClick={() => navigate("earning/current-week")}
        >
          <p className="text-3xl">
            <GiCoins />
          </p>
          <p className="text-[12px] ">Earning</p>
        </div>
      </div>
      <div className="flex">
        <div
          className="lg:flex hidden   py-4 px-6 gap-2  items-center border-b  border-slate-100 flex-col cursor-pointer text-secondaryfont hover:text-hoverColor hover:font-semibold"
          onClick={() => navigate("settings/store-settings")}
        >
          <p className="text-3xl">
            <CiSettings />
          </p>
          <p className="text-[12px] ">Settings</p>
        </div>
        <div
          className="lg:flex hidden   py-4 px-6 gap-2  items-center border-b  border-slate-100 flex-col cursor-pointer text-secondaryfont hover:text-hoverColor hover:font-semibold"
          onClick={() => navigate("menu/item-list")}
        >
          <p className="text-3xl">
            <SlNotebook />
          </p>
          <p className="text-[12px] ">Menu</p>
        </div>
      </div>
    </div>
  );
});
