import React, { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import ToggleRightField from "../../components/ToggleRightField";
import { useSelector } from "react-redux";
import SidebarField from "../../components/Sidebar/SidebarField";
import Button, { SecondaryButton } from "../../components/Button";
import TimeFormate from "../../components/TimeFormate";
import Select from "react-select";
import TextInput from "../../components/TextInput";
import Lable from "../../components/Lable";

const CancellationPolicy = () => {
  const { theme } = useSelector((state) => state.theme);
  const [cancellationEdit, setCancellationEdit] = useState(false);
  const [bookingSlotEdit, setBookingSlotEdit] = useState(false);

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
      <BreadCrumb title={"Cancellation Policy"} />
      <div className="grid xl:grid-cols-2 lg:grid-col-2 md:grid-cols-2 gap-3">
        <div
          className={`${
            theme === "light"
              ? "bg-secondaryColor text-textColorLight"
              : "bg-darkThirsary text-darkSecondary"
          }  w-full  p-5  shadow-2xl rounded-xl`}
        >
          <div className="flex justify-between mb-5">
            <span className="font-semibold">Cancellation Policy</span>
            <SecondaryButton
              onClick={() => setCancellationEdit(true)}
              text="Edit"
            />
          </div>
          <span className="font-semibold">Booking-Fees</span>
          <ToggleRightField
            text={"Do you want set booking fees ?"}
            subtext={
              "If ON then at booking time we will charge user amount that set by you"
            }
          />
          <div className="cursor-pointer text-sm py-3 border-b">
            <div className="flex justify-between items-center ">
              <span>Booking-Fees</span>
              <span>₹ 0</span>
            </div>
            <span className="text-[12px]">Booking-Fees</span>
          </div>
          <span className="font-semibold">Without Order</span>
          <ToggleRightField
            text={"Do you want to set Cancellation Charge ?"}
            subtext={"If ON than apply cancellation charge"}
          />
          <span className="font-semibold">With Order</span>
          <ToggleRightField
            text={"Do you want to set Cancellation Charge ?"}
            subtext={"If ON than apply cancellation charge"}
          />
        </div>
        <div
          className={`${
            theme === "light"
              ? "bg-secondaryColor text-textColorLight"
              : "bg-darkThirsary text-darkSecondary"
          }  w-full  p-5  shadow-2xl rounded-xl`}
        >
          <div className="flex justify-between mb-5">
            <span className="font-semibold">Booking Slot Settings</span>

            <SecondaryButton
              onClick={() => setBookingSlotEdit(true)}
              text="Edit"
            />
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
      </div>
      {bookingSlotEdit ? (
        <SidebarField
          button1={
            <Button
              text={"Cancel"}
              type="button"
              onClick={() => setBookingSlotEdit(false)}
            />
          }
          button2={<Button text="Update " type="submit" />}
          title={"Booking Slot Settings"}
          handleClose={() => setBookingSlotEdit(false)}
        >
          {days.map((item, i) => {
            return (
              <div key={i}>
                <div className="flex justify-between mt-5">
                  <span className="font-semibold">{item}</span>
                <SecondaryButton onClick={() => handleToggle(i)} text='Add New Slot'/>
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
                    <button
                      onClick={() => handleToggle(i)}
                      className="border border-buttonColor rounded-full text-[12px] px-3 font-semibold text-buttonColor mt-5"
                    >
                      Save New Slot
                    </button>
                  </>
                ) : null}
              </div>
            );
          })}
          <div className="cursor-pointer text-sm py-3 border-b my-5">
            <div className="flex gap-10 items-center ">
              <div>
                <div>Slot Difference</div>
                <div className="text-[12px]">.Slot Difference Note</div>
              </div>
              <Select
                options={[
                  { id: 1, label: "10" },
                  { id: 2, label: "20" },
                  { id: 3, label: "30" },
                ]}
                className="w-32 text-sm"
              />
            </div>
          </div>
        </SidebarField>
      ) : null}
      {cancellationEdit ? (
        <SidebarField
          button1={
            <Button
              text={"Cancel"}
              type="button"
              onClick={() => setCancellationEdit(false)}
            />
          }
          button2={<Button text="Submit " type="submit" />}
          title={"Edit Table Reservation Charges"}
          handleClose={() => setCancellationEdit(false)}
        >
          <span className="text-md font-semibold">Booking-Fees</span>
          <ToggleRightField
            text={"Do you want set booking fees ?"}
            subtext={
              "If ON then at booking time we will charge user amount that set by you"
            }
          />
          <div className=" text-sm py-3 mb-5 border-b">
            <div className="flex justify-between items-end ">
              <span>Booking-Fees</span>
              <span className="flex items-center w-32">
                <span className="border p-2 pl-3 pr-2 text-sm border-r-none">
                  ₹
                </span>
                <TextInput type="number" placeholder="0" />
              </span>
            </div>
          </div>
          <div>
            <span className="text-md font-semibold ">Without Order</span>

            <ToggleRightField
              text={"Do you want to set Cancellation Charge ?"}
              subtext={"If ON than apply cancellation charge"}
            />

            <div className="flex flex-col gap-4 my-3">
              <div>
                <Lable lable="Time" />
                <TextInput />
              </div>
              <div>
                <Lable lable="Charges type" />
                <TextInput />
              </div>
              <Button type="submit" text="Add" />
              <div>
                <div>Time</div>
                <div>Charges</div>
                <div>Delete</div>
              </div>
              <div className="text-center border-y py-3">
                Slots not available
              </div>
            </div>
          </div>
          <div>
            <span className="text-md font-semibold ">With Order</span>

            <ToggleRightField
              text={"Do you want to set Cancellation Charge ?"}
              subtext={"If ON than apply cancellation charge"}
            />

            <div className="flex flex-col gap-4 my-3">
              <div>
                <Lable lable="Time" />
                <TextInput />
              </div>
              <div>
                <Lable lable="Charges type" />
                <TextInput />
              </div>
              <Button type="submit" text="Add" />
              <div>
                <div>Time</div>
                <div>Charges</div>
                <div>Delete</div>
              </div>
              <div className="text-center border-y py-3">
                Slots not available
              </div>
            </div>
          </div>
        </SidebarField>
      ) : null}
    </div>
  );
};

export default CancellationPolicy;
