import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { PiDotOutlineFill } from "react-icons/pi";
import { IoMdCart } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { VscCalendar } from "react-icons/vsc";
import { FaAngleRight, FaStore, FaAngleDown } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { CiSettings , CiStar} from "react-icons/ci";
import { TfiAlarmClock } from "react-icons/tfi";
import { MdContentPaste, MdToday , MdOutlineDeliveryDining, MdImportExport, MdOutlineTableBar} from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { BiTimer } from "react-icons/bi";
import { BsCartCheckFill } from "react-icons/bs";
import { RiFolderHistoryFill } from "react-icons/ri";
import { FaSitemap } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";
import { SiModin } from "react-icons/si";
import { VscSettings } from "react-icons/vsc";
import { TbSettingsX } from "react-icons/tb";

const SubSidebar = ({ sidebarData })  => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const location = useLocation();
  const newPath = location.pathname.split("/store/")[1];

  const iconComponents = {
    IoMdCart: <IoMdCart />,
    SlCalender: <SlCalender />,
    VscCalendar: <VscCalendar />,
    FaStore: <FaStore />,
    AiOutlineProduct: <AiOutlineProduct />,
    CiSettings: <CiSettings />,
    MdOutlineDeliveryDining: <MdOutlineDeliveryDining />,
    TfiAlarmClock: <TfiAlarmClock />,
    MdContentPaste:<MdContentPaste/>,
    MdToday:<MdToday/>,
    GiSandsOfTime:<GiSandsOfTime/>,
    BiTimer:<BiTimer/>,
    BsCartCheckFill:<BsCartCheckFill/>,
    MdOutlineTableBar:<MdOutlineTableBar/>,
    RiFolderHistoryFill:<RiFolderHistoryFill/>,
    CiStar:<CiStar/>,
    FaSitemap:<FaSitemap/>,
    CgNotes:<CgNotes/>,
    SiModin:<SiModin/>,
    MdImportExport:<MdImportExport/>,
    VscSettings:<VscSettings/>,
    TbSettingsX:<TbSettingsX/>
  };

  const handleToggle = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  return (
    <div>
      {sidebarData && (
        <>
          {sidebarData.submenu &&
            sidebarData.submenu.map((item, index) => (
              <div key={index} className="py-2.5 ">
                <NavLink
                  className={`flex items-center gap-2 text-sm  hover:text-hoverColor hover:font-semibold${
                    newPath === item.path ? "text-thirsaryColor" : ""
                  }`}
                  to={`${item.path}`}
                >
                  {newPath === item.path ? <PiDotOutlineFill /> : ""}
                  <span className="text-xl">{iconComponents[item.icon]}</span>
                  {item.title}
                </NavLink>
              </div>
            ))}

          {sidebarData.accordian &&
            sidebarData.accordian.map((item, index) => (
              <div key={index}>
                <div
                  key={index}
                  onClick={() => handleToggle(index)}
                  className="cursor-pointer py-2.5 text-secondaryfont flex items-center gap-3"
                >
                  {expandedIndex === index ? <FaAngleDown /> : <FaAngleRight />}
                  {item.accordianTitle}
                </div>
                {expandedIndex === index &&
                  item.accordianmenu.map((value, valueIndex) => (
                    <div key={valueIndex} className="py-2.5 text-secondaryfont pl-5">
                      <NavLink
                        className={`flex items-center gap-2 text-sm  hover:text-hoverColor hover:font-semibold ${
                          newPath === value.path ? "text-thirsaryColor" : ""
                        }`}
                        to={`${value.path}`}
                      >
                        {newPath === value.path ? <PiDotOutlineFill /> : ""}
                        <span className="text-xl">
                          {iconComponents[value.icon]}
                        </span>
                        {value.title}
                      </NavLink>
                    </div>
                  ))}
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default SubSidebar;
