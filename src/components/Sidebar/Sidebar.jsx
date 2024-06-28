import React from "react";
import { SlNotebook } from "react-icons/sl";
import { GiCoins } from "react-icons/gi";
import { ImUsers } from "react-icons/im";
import { AiOutlineTag } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { NavLink} from "react-router-dom";
import data from '../../validationSchema/Sidebar.json'

const Sidebar = ({handleSubSidebar}) => {

  const iconComponents = {
    SlNotebook: <SlNotebook />,
    GiCoins: <GiCoins />,
    ImUsers: <ImUsers />,
    AiOutlineTag: <AiOutlineTag />,
    CiSettings: <CiSettings />
  };

  return (
      data.map((item, i) => (
        <NavLink
          key={i}
          className={`flex flex-col gap-2 py-5 items-center border-b border-slate-100 cursor-pointer hover:text-hoverColor hover:font-semibold`}
          to={item.path}
          onClick={()=> handleSubSidebar(item)}
        >
          <p className="text-3xl">{iconComponents[item.icon]}</p>
          <p className="text-[12px]">{item.title}</p>
        </NavLink>
      ))
  );
};

export default Sidebar;
