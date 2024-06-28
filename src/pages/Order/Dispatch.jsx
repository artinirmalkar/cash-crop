import React from "react";
import { useSelector } from "react-redux";
import DispatchRightSideComponent from "../../components/DispatchRightSideComponent";

const Dispatch = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className="flex ">
      <DispatchRightSideComponent />

      <div className="p-5 w-full">
        {/* <BreadCrumb title={"Dispatch"} /> */}
        <div
          className={`${
            theme === "light" ? "bg-secondaryColor" : "bg-darkThirsary"
          } w-full h-screen shadow-2xl rounded-lg p-5 `}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14790.769921669018!2d82.13871265!3d22.06135605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1718960096876!5m2!1sen!2sin"
            className={`w-full h-full  ${
              theme === "light" ? "bg-secondaryColor" : "bg-darkThirsary"
            }`}
            allowfullscreen=""
            loading="lazy"
            title="Location"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Dispatch;
