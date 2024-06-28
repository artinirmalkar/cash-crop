import React, { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import { useSelector } from "react-redux";
import ToggleRightField from "../../components/ToggleRightField";
import Button, { SecondaryButton } from "../../components/Button";
import SidebarField from "../../components/Sidebar/SidebarField";
import TextInput from "../../components/TextInput";

const BasicSettings = () => {
  const { theme } = useSelector((state) => state.theme);
  const [editBasicSetting, setEditBasicSetting] = useState(false);
  const [editTableInfo, setTableInfo] = useState(false);

  return (
    <div className="p-4">
      <BreadCrumb title={"Basic Settings"} />
         
      <div className="grid xl:grid-cols-2 lg:grid-col-2 md:grid-cols-2 gap-3">
        <div
          className={`${
            theme === "light"
              ? "bg-secondaryColor text-textColorLight"
              : "bg-darkThirsary text-darkSecondary"
          }  w-full  p-5  shadow-2xl rounded-xl`}
        >
          <div className="flex justify-between mb-5">
            <span className="font-semibold">Basic Settings</span>
           <SecondaryButton onClick={() => setEditBasicSetting(true)} text='Edit'/>
          </div>

          <ToggleRightField
            text={"Are you provide table reservation ?"}
            subtext={"If on then user can see table reservation option"}
          />
          <ToggleRightField
            text={"Can user book order with table reservation ?"}
            subtext={"If on then user can book order with table booking."}
          />

          <div className="cursor-pointer text-sm py-3 border-b">
            <div className="flex justify-between items-center ">
              <span>Table kept after reservation time</span>
              <span>0 Min</span>
            </div>
            <span className="text-[12px]">
              User can book table no of min in restaurant
            </span>
          </div>

          <div className="cursor-pointer text-sm py-3 border-b">
            <div className="flex justify-between items-center ">
              <span>The table reservation placement has to be atleast min</span>
              <span>0 Min</span>
            </div>
            <span className="text-[12px]">
              user have to come before table booking time
            </span>
          </div>

          <div className="cursor-pointer text-sm py-3 border-b">
            <div className="flex justify-between items-center ">
              <span>Max days you can book table reservation</span>
              <span>0 day</span>
            </div>
            <span className="text-[12px]">
              user can book table within days from today
            </span>
          </div>

          <div className="cursor-pointer text-sm py-3 border-b">
            <div className="flex justify-between items-center ">
              <span>Set minimum and maximum person seat</span>
              <span>0 - 0</span>
            </div>
            <span className="text-[12px]">
              User have to select person from min and max
            </span>
          </div>
        </div>

        <div
          className={`${
            theme === "light"
              ? "bg-secondaryColor text-textColorLight"
              : "bg-darkThirsary text-darkSecondary"
          }  w-full  p-5  shadow-2xl rounded-xl`}
        >
          <div className="flex justify-between mb-5">
            <span className="font-semibold">Table Info</span>
            <Button
              type={"button"}
              text={"Add New"}
              onClick={() => setTableInfo(true)}
            />
          </div>
          <div className="my-3 text-center text-sm">No Tables Found</div>
        </div>
      </div>
            
      {editBasicSetting ? (
        <SidebarField
          button1={
            <Button
              text={"Cancel"}
              type="button"
              onClick={() => setEditBasicSetting(false)}
            />
          }
          button2={<Button text="Submit " type="submit" />}
          title={"Basic Settings"}
          handleClose={() => setEditBasicSetting(false)}
        >
            <ToggleRightField text={'Are you provide table reservation ?'} subtext={'If on then user can see table reservation option'}/>
            <ToggleRightField text={'Can user book order with table reservation ?'} subtext={'If on then user can book order with table booking.'}/>

      
          <div className="cursor-pointer text-sm py-3 border-b">
            <div className="flex justify-between items-center ">
            <div>
              <div>Table kept after reservation time</div>
              <div>User can book table no of min in restaurant</div>
            </div>
              <span>
                  <span className="border px-3 py-2">0</span>
                  <span className="border px-3 py-2">Min</span>
              </span>
            </div>
          </div>

          <div className="cursor-pointer text-sm py-3 border-b">
            <div className="flex justify-between items-center ">
            <div>
              <div>The table reservation placement has to be atleast min in advance</div>
              <div>user have to come before table booking time</div>
            </div>
              <span>
                  <span className="border px-3 py-2">0</span>
                  <span className="border px-3 py-2">Min</span>
              </span>
            </div>
          </div>

          <div className="cursor-pointer text-sm py-3 border-b">
            <div className="flex justify-between items-center ">
            <div>
              <div>Max days you can book table reservation</div>
              <div>user can book table within days from today</div>
            </div>
              <span>
                  <span className="border px-3 py-2">0</span>
                  <span className="border px-3 py-2">Min</span>
              </span>
            </div>
          </div>

          <div className="cursor-pointer text-sm py-3 border-b">
            <div className="flex justify-between items-center ">
            <div>
              <div>Set minimum and maximum person seat</div>
              <div>User have to select person from min and max</div>
            </div>
              <span>
                  <span className="border px-3 py-2">0</span>
                  <span className="border px-3 py-2">0</span>
              </span>
            </div>
          </div>
        </SidebarField>
      ) : null}
    
      {editTableInfo ? (
        <SidebarField
          button1={
            <Button
              text={"Cancel"}
              type="button"
              onClick={() => setTableInfo(false)}
            />
          }
          button2={<Button text="Submit " type="submit" />}
          title={"Add Table"}
          handleClose={() => setTableInfo(false)}
        >
          <div className="cursor-pointer text-sm py-3 border-b">
            <div className="flex justify-between items-center ">
              <span>Table No</span>
              <TextInput name={'table_no'} placeholder={'Table No'}/>
             
            </div>
          </div>
          <div className="cursor-pointer text-sm py-3 border-b">
            <div className="flex justify-between items-center ">
              <span>Table Code</span>
              <TextInput name={'table_code'} placeholder={'Table Code'}/>
            </div>
          </div>
          <div className="cursor-pointer text-sm py-3 border-b">
            <div className="flex justify-between items-center ">
              <span>Min-Max Person</span>
              <span>
                  <span className="border px-3 py-2">1</span>
                  <span className="border px-3 py-2">2</span>
                </span>
            </div>
          </div>
          <ToggleRightField text={'Do you want user book this table ?'}/>
          <ToggleRightField text={'Is Bussiness'}/>
        </SidebarField>
      ) : null}
    
    </div>
  );
};

export default BasicSettings;
