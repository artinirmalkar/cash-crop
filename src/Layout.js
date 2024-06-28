import React, { useEffect, useRef, useState } from "react";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import SubSidebar from "./components/Sidebar/SubSidebar";
import { useSelector } from "react-redux";
import { PrimeReactProvider } from "primereact/api";

const Layout = () => {
  const ref = useRef();
  const location = useLocation();
  const { theme } = useSelector((state) => state.theme);

  const [sidebar, setSidebar] = useState(true);
  const [subSidebar, setSubSidebar] = useState(false);
  const [sidebarData, setSidebarData] = useState(null);

  const handleSidebar = () => {
    if (subSidebar) {
      setSubSidebar(false);
    }
    if (!subSidebar) {
      setSidebar(false);
    }
    if (!sidebar) {
      setSidebar(true);
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.style.setProperty("--bg-color-light", "var(--bg-color-dark)");
      root.style.setProperty("--text-color-light", "var(--text-color-dark)");
    } else {
      root.style.setProperty("--bg-color-light", "#ffffff");
      root.style.setProperty("--text-color-light", "#000000");
    }
  }, [theme]);

  useEffect(() => {
    const newPathname = location.pathname.split("/store/")[1];
    const pathname = sidebarData && sidebarData.path ? sidebarData.path : null;

    if (newPathname === pathname) {
      setSubSidebar(true);
    }

    if (newPathname === "offers") {
      setSubSidebar(false);
    }
    if (newPathname === "order/dispatch") {
      setSidebar(false);
    }
  }, [location, sidebarData]);

  const handleSubSidebar = (item) => {
    setSidebarData(item);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setSubSidebar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <PrimeReactProvider>
      <div
        className={` ${
          theme === "light"
            ? "bg-[#f8f8f8] text-textColorLight"
            : "bg-darkPrimary text-darkSecondary"
        }`}
      >
        <Topbar handleSidebar={handleSidebar} />

        {sidebar ? (
          <>
            <div
              className={`sidebar w-32 ${
                theme === "light"
                  ? "bg-secondaryColor text-textColorLight"
                  : "bg-darkThirsary text-darkSecondary"
              } 
              shadow-2xl  z-10 mt-24 h-screen flex-col ${
                subSidebar ? "" : "rounded-tr-xl rounded-br-xl"
              } fixed overflow-x-auto`}
            >
              <Sidebar handleSubSidebar={handleSubSidebar} />
            </div>
            {subSidebar &&
            sidebarData &&
            sidebarData.submenu &&
            sidebarData.accordian ? (
              <div
                className={`w-64   ${
                  theme === "light"
                    ? "bg-secondaryColor text-textColorLight"
                    : "bg-darkThirsary text-darkSecondary"
                } fixed top-24 lg:left-32 z-10 h-screen flex-col shadow-2xl p-4 rounded-tr-xl rounded-br-xl`}
              >
                <SubSidebar sidebarData={sidebarData && sidebarData} />
              </div>
            ) : null}
          </>
        ) : null}
        <div
          className={`top-14 py-10 absolute  right-0 ${
            sidebar ? (subSidebar ? "w-4/5" : "w-11/12") : "w-full"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </PrimeReactProvider>
  );
};

export default Layout;
