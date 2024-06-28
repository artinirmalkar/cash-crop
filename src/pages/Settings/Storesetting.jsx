import React, { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import { useSelector } from "react-redux";
import ToggleRightField from "../../components/ToggleRightField";
import Button, { SecondaryButton } from "../../components/Button";
import TextInput from "../../components/TextInput";
import SidebarField from "../../components/Sidebar/SidebarField";
import Select from "react-select";

const Storesetting = () => {
  return (
    <div className="p-4">
      <BreadCrumb title={"Store Setting"} />
      <div className="grid xl:grid-cols-3 lg:grid-col-2 md:grid-cols-2 gap-3">
        <StoreSettings />
        <OrderSettings />
        <Freedeliverysettings />
        <Ordercancellationsettings />
        <Language />
        <GeneralSettings />
        <Selecttagswhereyourexpertiselie />
      </div>
    </div>
  );
};

export default Storesetting;

const StoreSettings = () => {
  const { theme } = useSelector((state) => state.theme);
  const [editStore, setEditStore] = useState(false);
  return (
    <>
      <div
        className={`${
          theme === "light"
            ? "bg-secondaryColor text-textColorLight"
            : "bg-darkThirsary text-darkSecondary"
        } w-full h-full p-5  shadow-2xl rounded-xl`}
      >
        <div className="flex justify-between mb-5">
          <span className="font-semibold">Store settings</span>
          <SecondaryButton text="Edit" onClick={() => setEditStore(true)} />
        </div>

        <ToggleRightField text={"Do You provide PICKUP Delivery ?"} />
        <ToggleRightField text={"Do You Provide Delivery ?"} />

        <div className="cursor-pointer text-sm py-3 border-b">
          <div className="flex justify-between items-center ">
            <span>Min. & Max. Delivery Time</span>
            <span>30-45 Min</span>
          </div>
          <span className="text-[12px]">
            Approximate delivery time to show user
          </span>
        </div>
        <div className="cursor-pointer text-sm py-3 border-b">
          <div className="flex justify-between items-center ">
            <span>Price Rating</span>
            <span>1</span>
          </div>
          <span className="text-[12px]">
            Showing max price of item (Ex. if price $99 then 2)
          </span>
        </div>
      </div>
      {/*  Order Setting Edit */}
      {editStore ? (
        <SidebarField
          button1={
            <Button
              text={"Cancel"}
              type="button"
              onClick={() => setEditStore(false)}
            />
          }
          button2={<Button text="Submit " type="submit" />}
          title={"Edit store settings"}
          handleClose={() => setEditStore(false)}
        >
          <div className="px-2">
            <ToggleRightField
              text={"Do You provide PICKUP Delivery ?"}
              subtext={"If ON than user will pickup order from store"}
            />
            <ToggleRightField
              text={"Do You Provide Delivery?"}
              subtext={"If ON than user will pickup order from store"}
            />

            <div className=" text-sm py-3 border-b">
              <div className="flex justify-between items-end ">
                <span>Min. & Max. Delivery Time</span>
                <span>
                  <span className="border px-3 py-2">30</span>
                  <span className="border px-3 py-2">45</span>
                </span>
              </div>
              <span className="text-[12px]">
                Approximate delivery time to show user
              </span>
            </div>

            <div className=" text-sm py-3 border-b">
              <div className="flex justify-between items-end ">
                <span>Price Rating</span>
                <span className="border px-3 py-2">1</span>
              </div>
              <span className="text-[12px]">
                Showing max price of item (Ex. if price $99 then 2)
              </span>
            </div>
          </div>
        </SidebarField>
      ) : null}
    </>
  );
};

const OrderSettings = () => {
  const { theme } = useSelector((state) => state.theme);
  const [orderEdit, setOrderEdit] = useState(false);
  return (
    <>
      <div
        className={`${
          theme === "light"
            ? "bg-secondaryColor text-textColorLight"
            : "bg-darkThirsary text-darkSecondary"
        } w-full h-full p-5  shadow-2xl rounded-xl`}
      >
        <div className="flex justify-between mb-5">
          <span className="font-semibold">Order settings</span>
          <SecondaryButton onClick={() => setOrderEdit(true)} text="Edit" />
        </div>

        <ToggleRightField
          text={"Do you want to apply individual tax on Item?"}
          subtext={"If ON than apply individual Item Tax / Vat on order"}
        />

        <div className="cursor-pointer text-sm py-3 border-b">
          <div className="flex justify-between items-center ">
            <span>Tax on Item</span>
            <span>Tax Is Exclusive</span>
          </div>
        </div>

        <ToggleRightField
          text={"Is your tax included on item price or exclusive"}
          subtext={"If ON then select tax included on item and modifiers price"}
        />

        <div className="cursor-pointer text-sm py-3 border-b">
          <div className="flex justify-between items-center ">
            <span>Minimum Order Price</span>
            <span>₹ 0</span>
          </div>
          <span className="text-[12px]">User can order above this price</span>
        </div>

        <ToggleRightField
          text={"Assign to Deliveryman when order is accepted"}
          subtext={"Assign to Deliveryman when order is accepted"}
        />
      </div>
      {/*  Order Setting Edit */}
      {orderEdit ? (
        <SidebarField
          button1={
            <Button
              text={"Cancel"}
              type="button"
              onClick={() => setOrderEdit(false)}
            />
          }
          button2={<Button text="Submit " type="submit" />}
          title={"Order settings"}
          handleClose={() => setOrderEdit(false)}
        >
          <div className="px-2">
            <ToggleRightField
              text={"Do you want to apply individual tax on Item?"}
              subtext={"If ON than apply individual Item Tax / Vat on order"}
            />
            <div className=" text-sm py-3 border-b">
              <div>Tax on Item</div>
              <div className="text-[12px]">
                If above field OFF then apply this tax on order
              </div>
              <Select
                options={[
                  { id: 1, label: "GST 18%" },
                  { id: 2, label: "GST 10%" },
                  { id: 3, label: "IGST 8%" },
                  { id: 4, label: "ASDADA 13%" },
                ]}
                className="w-52 text-sm"
              />
            </div>
            <ToggleRightField
              text={"Is your tax included on item price or exclusive"}
              subtext={
                "If ON then select tax included on item and modifiers price"
              }
            />
            <div className=" text-sm py-3 border-b">
              <div className="flex justify-between items-end ">
                <span>Minimum Order Price</span>
                <span className="flex items-center w-32">
                  <span className="border p-2 pl-3 pr-2 text-sm border-r-none">
                    ₹
                  </span>
                  <TextInput type="number" placeholder="0" />
                </span>
              </div>
              <span className="text-[12px]">
                User can order above this price
              </span>
            </div>
            <ToggleRightField
              text={"Assign to Deliveryman when order is accepted"}
              subtext={"Assign to Deliveryman when order is accepted"}
            />
          </div>
        </SidebarField>
      ) : null}
    </>
  );
};

const Freedeliverysettings = () => {
  const { theme } = useSelector((state) => state.theme);
  const [freeDeliveryEdit, setFreeDeliveryEdit] = useState(false);
  return (
    <>
      <div
        className={`${
          theme === "light"
            ? "bg-secondaryColor text-textColorLight"
            : "bg-darkThirsary text-darkSecondary"
        } w-full h-full p-5  shadow-2xl rounded-xl`}
      >
        <div className="flex justify-between mb-5">
          <span className="font-semibold">Free delivery settings</span>

          <SecondaryButton
            text="Edit"
            onClick={() => setFreeDeliveryEdit(true)}
          />
        </div>

        <ToggleRightField
          text={"Delivery fee on store"}
          subtext={"If ON than user will not pay delivery fees"}
        />

        <div className="cursor-pointer text-sm py-3 border-b">
          <div className="flex justify-between items-center ">
            <span>Price</span>
            <span>₹ 0</span>
          </div>
          <span className="text-[12px]">
            User get free delivery if order price is more than this
          </span>
        </div>
        <div className="cursor-pointer text-sm py-3 border-b">
          <div className="flex justify-between items-center ">
            <span>Radius</span>
            <span>0 km</span>
          </div>
          <span className="text-[12px]">
            Free delivery available for user this radius
          </span>
        </div>
      </div>
      {freeDeliveryEdit ? (
        <SidebarField
          button1={
            <Button
              text={"Cancel"}
              type="button"
              onClick={() => setFreeDeliveryEdit(false)}
            />
          }
          button2={<Button text="Submit " type="submit" />}
          title={"Edit free delivery settings"}
          handleClose={() => setFreeDeliveryEdit(false)}
        >
          <div className="px-2">
            <ToggleRightField
              text={"Delivery fee on store"}
              subtext={"If ON than user will not pay delivery fees"}
            />
            <div className=" text-sm py-3 border-b">
              <div className="flex justify-between items-end ">
                <span>Price</span>
                <span className="flex items-center w-32">
                  <span className="border p-2 pl-3 pr-2 text-sm border-r-none">
                    ₹
                  </span>
                  <TextInput type="number" placeholder="0" />
                </span>
              </div>
              <span className="text-[12px]">
                User get free delivery if order price is more than this
              </span>
            </div>
            <div className=" text-sm py-3 border-b">
              <div className="flex justify-between items-end ">
                <span>Free delivery available for user this radius</span>
                <span className="flex items-center w-32">
                  <TextInput type="number" placeholder="0" />
                  <span className="border p-2 pl-3 pr-2 text-sm border-r-none">
                    Km
                  </span>
                </span>
              </div>
              <span className="text-[12px]">Radius</span>
            </div>
          </div>
        </SidebarField>
      ) : null}
    </>
  );
};

const Ordercancellationsettings = () => {
  const { theme } = useSelector((state) => state.theme);
  const [orderCancellation, setOrderCancellation] = useState(false);

  return (
    <>
      <div
        className={`${
          theme === "light"
            ? "bg-secondaryColor text-textColorLight"
            : "bg-darkThirsary text-darkSecondary"
        } w-full h-full p-5  shadow-2xl rounded-xl`}
      >
        <div className="flex justify-between mb-5">
          <span className="font-semibold">Order cancellation settings</span>

          <SecondaryButton
            text="Edit"
            onClick={() => setOrderCancellation(true)}
          />
        </div>

        <ToggleRightField
          text={"Do you want to set cancellation charge?"}
          subtext={
            "If ON than apply cancellation charge User can cancel order till Order Ready"
          }
        />

        <div className="cursor-pointer text-sm py-3 border-b">
          <div className="flex justify-between items-center ">
            <span>Cancellation Charge (Percentage)</span>
            <span>0 %</span>
          </div>
          <span className="text-[12px]">If above on then apply</span>
        </div>
        <div className="cursor-pointer text-sm py-3 border-b">
          <div className="flex justify-between items-center ">
            <span>Price</span>
            <span>₹ 0</span>
          </div>
          <span className="text-[12px]">
            Cancellation charge apply above this price
          </span>
        </div>
      </div>
      {orderCancellation ? (
        <SidebarField
          button1={
            <Button
              text={"Cancel"}
              type="button"
              onClick={() => setOrderCancellation(false)}
            />
          }
          button2={<Button text="Submit " type="submit" />}
          title={"Order cancellation settings"}
          handleClose={() => setOrderCancellation(false)}
        >
          <div className="px-2">
            <ToggleRightField
              text={"Do you want to set cancellation charge?"}
              subtext={"If ON than apply cancellation charge"}
            />

            <div className=" text-sm py-3 border-b">
              <div>Cancellation charge apply between</div>

              <Select
                options={[
                  { id: 1, label: "Accepted" },
                  { id: 2, label: "Start Preparing" },
                  { id: 3, label: "Order Ready" },
                  { id: 4, label: "Pickup" },
                  { id: 5, label: "Arrived" },
                ]}
                className="w-full text-sm"
              />
            </div>
            <div className=" text-sm py-3 border-b">
              <div className="flex justify-between items-end ">
                <span>Cancellation Charge Type</span>
                <Select
                  options={[
                    { id: 1, label: "Percent" },
                    { id: 2, label: "Absolute" },
                  ]}
                  className="w-32 text-sm"
                />
              </div>
            </div>
            <div className=" text-sm py-3 border-b">
              <div className="flex justify-between items-end ">
                <span>Cancellation Charge</span>
                <span className="flex items-center w-32">
                  <TextInput type="number" placeholder="0" />
                  <span className="border p-2 pl-3 pr-2 text-sm border-r-none">
                    %
                  </span>
                </span>
              </div>
              <span className="text-[12px]">If above on then apply</span>
            </div>
            <div className=" text-sm py-3 border-b">
              <div className="flex justify-between  items-end">
                <span>Price</span>
                <span className="flex items-center w-32">
                  <span className="border p-2 pl-3 pr-2 text-sm border-r-none">
                    ₹
                  </span>
                  <TextInput type="number" placeholder="0" />
                </span>
              </div>
              <span className="text-[12px]">
                Cancellation charge apply above this price
              </span>
            </div>
          </div>
        </SidebarField>
      ) : null}
    </>
  );
};

const Language = () => {
  const { theme } = useSelector((state) => state.theme);
  const [editLanguage, setEditLanguage] = useState(false);

  return (
    <>
    
      <div
        className={`${
          theme === "light"
            ? "bg-secondaryColor text-textColorLight"
            : "bg-darkThirsary text-darkSecondary"
        } w-full h-full p-5  shadow-2xl rounded-xl`}
      >
        <div className="flex justify-between mb-5">
          <span className="font-semibold">Language</span>
          <SecondaryButton text="Edit" onClick={() => setEditLanguage(true)} />
        </div>

        <div className="cursor-pointer text-sm py-3 border-b">
          <div className="flex justify-between items-center">
            <span>English</span>
          </div>
        </div>
      </div>

      {editLanguage ? (
        <SidebarField
          button1={
            <Button
              text={"Cancel"}
              type="button"
              onClick={() => setEditLanguage(false)}
            />
          }
          button2={<Button text="Submit " type="submit" />}
          title={"Language"}
          handleClose={() => setEditLanguage(false)}
        >
          <div className="flex flex-col gap-2 border-b px-2 py-4">
            <label htmlFor="language" className="flex items-center gap-3">
              <input type="checkbox" checked id="language" />
              <span id="language">English</span>
            </label>
            <label htmlFor="language" className="flex items-center gap-3">
              <input type="checkbox" id="language" />
              <span id="language">Arabik</span>
            </label>
            <label htmlFor="language" className="flex items-center gap-3">
              <input type="checkbox" id="language" />
              <span id="language">Spanish</span>
            </label>
            <label htmlFor="language" className="flex items-center gap-3">
              <input type="checkbox" id="language" />
              <span id="language">French</span>
            </label>
          </div>
        </SidebarField>
      ) : null}

    </>
  );
};

const GeneralSettings = () => {
  const { theme } = useSelector((state) => state.theme);
  const [editGeneral, setEditGeneral] = useState(false);
  return (
    <>
      <div
        className={`${
          theme === "light"
            ? "bg-secondaryColor text-textColorLight"
            : "bg-darkThirsary text-darkSecondary"
        } w-full h-full p-5  shadow-2xl rounded-xl`}
      >
        <div className="flex justify-between mb-5">
          <span className="font-semibold">General Settings</span>

          <SecondaryButton text="Edit" onClick={() => setEditGeneral(true)} />
        </div>

        <ToggleRightField text={"Business"} subtext={"Business"} />
        <ToggleRightField text={"Busy"} subtext={"Busy"} />
        <ToggleRightField text={"Visible"} subtext={"Visible"} />
      </div>
      {editGeneral ? (
        <SidebarField
          button1={
            <Button
              text={"Cancel"}
              type="button"
              onClick={() => setEditGeneral(false)}
            />
          }
          button2={<Button text="Submit " type="submit" />}
          title={"General Settings"}
          handleClose={() => setEditGeneral(false)}
        >
          <div className="px-2">
            <ToggleRightField text={"Business"} subtext={"Business"} />
            <ToggleRightField text={"Busy"} subtext={"Busy"} />
            <ToggleRightField text={"Visible"} subtext={"Visible"} />
          </div>
        </SidebarField>
      ) : null}
    </>
  );
};

const Selecttagswhereyourexpertiselie = () => {
  const { theme } = useSelector((state) => state.theme);
  const [editTag, setEditTag] = useState(false);
  return (
    <>
      <div
        className={`${
          theme === "light"
            ? "bg-secondaryColor text-textColorLight"
            : "bg-darkThirsary text-darkSecondary"
        } w-full h-full p-5  shadow-2xl rounded-xl`}
      >
        <div className="flex justify-between mb-5">
          <span className="font-semibold">
            Select tags where your expertise lie
          </span>

          <SecondaryButton onClick={() => setEditTag(true)} text="Edit" />
        </div>

        <div className="flex items-center justify-center border-b p-10">
          Tag not found
        </div>
      </div>
      {editTag ? (
        <SidebarField
          button1={
            <Button
              text={"Cancel"}
              type="button"
              onClick={() => setEditTag(false)}
            />
          }
          button2={<Button text="Submit " type="submit" />}
          title={"Tag"}
          handleClose={() => setEditTag(false)}
        >
          <div className="flex flex-col gap-2 border-b px-2 py-4">
            <label htmlFor="tag" className="flex items-center gap-3">
              <input type="checkbox" checked id="tag" />
              <span id="tag">Juice</span>
            </label>
            <label htmlFor="tag" className="flex items-center gap-3">
              <input type="checkbox" id="tag" />
              <span id="tag">Spicy Food</span>
            </label>
            <label htmlFor="tag" className="flex items-center gap-3">
              <input type="checkbox" id="tag" />
              <span id="tag">Cafe</span>
            </label>
          </div>
        </SidebarField>
      ) : null}
    </>
  );
};
