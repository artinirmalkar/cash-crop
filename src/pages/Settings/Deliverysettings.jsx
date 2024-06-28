import React, { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import { useSelector } from "react-redux";
import ToggleRightField from "../../components/ToggleRightField";
import Button, { SecondaryButton } from "../../components/Button";
import SidebarField from "../../components/Sidebar/SidebarField";
import TextInput from "../../components/TextInput";
import TimeFormate from "../../components/TimeFormate";

const Deliverysettings = () => {
  const { theme } = useSelector((state) => state.theme);
  const [deliveryEdit, setDeliveryEdit] = useState(false);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [timeShow, setTimeShow] = useState(Array(days.length).fill(false));

  const handleToggle = (index) => {
    const newTimeShow = [...timeShow];
    newTimeShow[index] = !newTimeShow[index];
    setTimeShow(newTimeShow);
  };

  return (
    <div className="p-4">
      <BreadCrumb title={"Delivery Settings"} />
      <div
        className={`${
          theme === "light"
            ? "bg-secondaryColor text-textColorLight"
            : "bg-darkThirsary text-darkSecondary"
        }  lg:w-[35rem]  p-5  shadow-2xl rounded-xl`}
      >
        <div className="flex justify-between mb-5">
          <span className="font-semibold">Delivery Slot settings</span>

          <SecondaryButton onClick={() => setDeliveryEdit(true)} text="Edit" />
        </div>
        <ToggleRightField
          text={"Can user schedule order ?"}
          subtext={"Can user schedule order ?"}
        />
        <div className="cursor-pointer text-sm py-3 border-b">
          <div className="flex justify-between items-center ">
            <span>Min. time after which user can schedule</span>
            <span>0 Mins</span>
          </div>
          <span className="text-[12px]">
            Min. time after which user can schedule
          </span>
        </div>
        <ToggleRightField
          text={"Delivery Anywhere"}
          subtext={"Delivery Anywhere"}
        />
        <ToggleRightField
          text={"Sunday"}
          subtext={"Open Full Day"}
          border={true}
        />
        <ToggleRightField
          text={"Monday"}
          subtext={"Open Full Day"}
          border={true}
        />
        <ToggleRightField
          text={"Tuesday"}
          subtext={"Open Full Day"}
          border={true}
        />
        <ToggleRightField
          text={"Wednesday"}
          subtext={"Open Full Day"}
          border={true}
        />
        <ToggleRightField
          text={"Thursday"}
          subtext={"Open Full Day"}
          border={true}
        />
        <ToggleRightField
          text={"Friday"}
          subtext={"Open Full Day"}
          border={true}
        />
        <ToggleRightField
          text={"Saturday"}
          subtext={"Open Full Day"}
          border={true}
        />
      </div>
      {deliveryEdit ? (
        <SidebarField
          button1={
            <Button
              text={"Cancel"}
              type="button"
              onClick={() => setDeliveryEdit(false)}
            />
          }
          button2={<Button text="Update " type="submit" />}
          title={"Slot Time Settings"}
          handleClose={() => setDeliveryEdit(false)}
        >
          <ToggleRightField
            text={"Can user schedule order ?"}
            subtext={"Can user schedule order?"}
          />
          <div className=" text-sm py-3 border-b">
            <div className="flex justify-between items-end ">
              <span>Min. time after which user can schedule</span>
              <span className="w-32">
                <TextInput type="number" placeholder="0" />
              </span>
            </div>
            <span className="text-[12px]">
              Min. time after which user can schedule
            </span>
          </div>
          <ToggleRightField
            text={"Schedule Delivery Time"}
            subtext={"Schedule Delivery Time"}
          />
          <ToggleRightField
            text={"Delivery Anywhere"}
            subtext={"Delivery Anywhere"}
          />

          {days.map((item, i) => {
            return (
              <div key={i}>
                <div className="flex justify-between mt-5">
                  <span className="font-semibold">{item}</span>
              
                  <SecondaryButton onClick={() => handleToggle(i)} text=" Add New Slot" />
                </div>
                <ToggleRightField
                  text={"Slot Time"}
                  border={true}
                  padding={true}
                />
                <ToggleRightField
                  text={"Open Full Day"}
                  border={true}
                  padding={true}
                />
                {timeShow[i] ? (
                  <>
                    <TimeFormate index={i} />
                    <SecondaryButton onClick={() => handleToggle(i)} text="Save New Slot" />
                  </>
                ) : null}
              </div>
            );
          })}
        </SidebarField>
      ) : null}
    </div>
  );
};

export default Deliverysettings;
