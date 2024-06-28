import React, { useState } from "react";
import { useSelector } from "react-redux";
import BreadCrumb from "../../components/BreadCrumb";
import Button, { SecondaryButton } from "../../components/Button";
import SidebarField from "../../components/Sidebar/SidebarField";
import TimeFormate from "../../components/TimeFormate";
import ToggleRightField from "../../components/ToggleRightField";

const Storetimesettings = () => {
  const { theme } = useSelector((state) => state.theme);
  const [storeTimeEdit, setStoreTimeEdit] = useState(false);

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
      <BreadCrumb title={"Store Time Setting"} />
      <div
        className={`${
          theme === "light"
            ? "bg-secondaryColor text-textColorLight"
            : "bg-darkThirsary text-darkSecondary"
        }  lg:w-[35rem]  p-5  shadow-2xl rounded-xl`}
      >
        <div className="flex justify-between mb-5">
          <span className="font-semibold">Store Open Close Time</span>

          <SecondaryButton onClick={() => setStoreTimeEdit(true)} text="Edit" />
        </div>
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
      {storeTimeEdit ? (
        <SidebarField
          button1={
            <Button
              text={"Cancel"}
              type="button"
              onClick={() => setStoreTimeEdit(false)}
            />
          }
          button2={<Button text="Update " type="submit" />}
          title={"Store Open Close Time"}
          handleClose={() => setStoreTimeEdit(false)}
        >
          {days.map((item, i) => {
            return (
              <div key={i}>
                <div className="flex justify-between mt-5">
                  <span className="font-semibold">{item}</span>
                  <SecondaryButton
                    onClick={() => handleToggle(i)}
                    text=" Add New Slot"
                  />
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
                    <SecondaryButton
                      onClick={() => handleToggle(i)}
                      text=" Save New Slot"
                    />
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

export default Storetimesettings;
