import { ErrorMessage, Form, Formik } from "formik";
import React, { useState } from "react";
import { MdEdit, MdOutlineEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import promoimg from "../../assest/offer_promo.png";
import BreadCrumb from "../../components/BreadCrumb";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import Lable from "../../components/Lable";
import SidebarField from "../../components/Sidebar/SidebarField";
import TextInput from "../../components/TextInput";
import Textarea from "../../components/Textarea";
import ToggleField from "../../components/ToggleField";
import { offerScheme } from "../../validationSchema/ValidationSchema";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Offers = () => {
  const data = [
    {
      id: "1",
      promoimg: "Bilaspur Store",
      promoCode: "P0-OI-PKO",
      description: "This is a demo promo.",
      no_of_uses: 2,
      dateRange: "18 Jun 2024 to 31 Dec 2025",
    },
    {
      id: "2",
      promoimg: "Bilaspur Store",
      promoCode: "P0-OI-PKO",
      description: "This is a demo promo.",
      no_of_uses: 2,
      dateRange: "18 Jun 2024 to 31 Dec 2025",
    },
    {
      id: "3",
      promoimg: "Bilaspur Store",
      promoCode: "P0-OI-PKO",
      description: "This is a demo promo.",
      no_of_uses: 2,
      dateRange: "18 Jun 2024 to 31 Dec 2025",
    },
    {
      id: "4",
      promoimg: "Bilaspur Store",
      promoCode: "P0-OI-PKO",
      description: "This is a demo promo.",
      no_of_uses: 2,
      dateRange: "18 Jun 2024 to 31 Dec 2025",
    },
    {
      id: "5",
      promoimg: "Bilaspur Store",
      promoCode: "P0-OI-PKO",
      description: "This is a demo promo.",
      no_of_uses: 2,
      dateRange: "18 Jun 2024 to 31 Dec 2025",
    },
    {
      id: "6",
      promoimg: "Bilaspur Store",
      promoCode: "P0-OI-PKO",
      description: "This is a demo promo.",
      no_of_uses: 2,
      dateRange: "18 Jun 2024 to 31 Dec 2025",
    },
  ];

  const [visible, setVisible] = useState(false);
  const [isApplyOfferChecked, setIsApplyOfferChecked] = useState(false);
  const [isRequireUses, setIsRequireUses] = useState(false);
  const [isMinOrderAmount, setIsMinOrderAmount] = useState(false);
  const [isMaxDiscountAmount, setIsMaxDiscountAmount] = useState(false);
  const [isMinItemCart, setIsMinItemCart] = useState(false);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const recursion = [
    { id: "1", label: "No Recursion", value: "No Recursion" },
    { id: "2", label: "Daily Recursion", value: "Daily Recursion" },
    { id: "3", label: "Weekly Recursion", value: "Weekly Recursion" },
    { id: "4", label: "Monthly Recursion", value: "Monthly Recursion" },
    { id: "5", label: "Annually Recursion", value: "Annually Recursion" },
  ];

  const initialValues = {
    promoimg: "",
    promoCode: "",
    promoType: "",
    discount: "",
    description: "",
    promoFor: "",
    isOfferRunning: false,
    setOfferValidationDate: false,
    dateRange: "",
    recursionType: "",
    applyOffer: "",
    requiredUses: "",
    minOrderAmount: "",
    maxDiscountAmount: "",
    minItemCart: "",
  };

  const handleSubmit = (values) => {
    console.log("Offers Value", values);
  };

  return (
    <div className="p-5 w-[100%]">
      <div className="flex justify-between items-center flex-wrap mb-2 border-b">
        <BreadCrumb title="Offers" />

        <Button
          text="Add New"
          type="button"
          className="float-end"
          onClick={handleOpen}
        />
      </div>

      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 mt-5">
        {data &&
          data.map((item) => {
            return <Card item={item} key={item.id} handleOpen={handleOpen} />;
          })}
      </div>

      {visible && (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={offerScheme}
        >
          {({ handleChange, values, handleSubmit }) => (
            <SidebarField
              handleClose={handleClose}
              title="Add New Offer"
              button1={
                <Button text="Cancel" type="button" onClick={handleClose} />
              }
              button2={<Button text="Submit" onClick={handleSubmit} />}
            >
              <Form className="w-full gap-4 flex flex-col bg-transparent py-5 px-3">
                <div className="relative h-fit w-[95%] shadow-xl rounded-xl m-auto">
                  <label
                    htmlFor="image-upload"
                    className="absolute right-1 top-1 p-2 bg-buttonColor rounded-full cursor-pointer text-secondaryColor"
                  >
                    <input
                      type="file"
                      id="image-upload"
                      accept="image/*"
                      onChange={handleChange}
                      value={values.promoimg}
                      name="promoimg"
                      style={{ display: "none" }}
                    />
                    <MdEdit />
                  </label>
                  <img
                    src={values.promoimg ? values.promoimg : promoimg}
                    alt="Promo Not Found"
                  />
                </div>
                <div>
                  <Lable lable="Promo code" />
                  <TextInput
                    name="promoCode"
                    type="text"
                    placeholder="Promo Code"
                    onChange={handleChange}
                    value={values.promoCode}
                  />
                  <ErrorMessage
                    name="promoCode"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="flex justify-between gap-2">
                  <div className="w-[90%]">
                    <Lable lable="Promo type" />
                    <Dropdown
                      options={[{}]}
                      name="promoType"
                      value={values.promoType}
                      onChange={handleChange}
                    />
                    <ErrorMessage
                      name="promoType"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="w-[90%]">
                    <Lable lable="Discount" />
                    <TextInput
                      name="discount"
                      type="number"
                      placeholder="0"
                      onChange={handleChange}
                      value={values.discount}
                    />
                    <ErrorMessage
                      name="discount"
                      component="div"
                      className="error"
                    />
                  </div>
                </div>
                <div>
                  <Lable lable="Description" />
                  <Textarea
                    name="description"
                    type="text"
                    placeholder=""
                    onChange={handleChange}
                    value={values.description}
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <Lable lable="Promo for" />
                  <Dropdown
                    options={[{}]}
                    name="promoFor"
                    value={values.promoFor}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="promoFor"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <ToggleField
                    text="Is your offer running ?"
                    name="isOfferRunning"
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="isOfferRunning"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="border-b">Offer Advance settings</div>
                <div>
                  <ToggleField
                    text="Do you want to set offer validation date ?"
                    name="setOfferValidationDate"
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="setOfferValidationDate"
                    component="div"
                    className="error"
                  />
                </div>
                {values.setOfferValidationDate && (
                  <div>
                    <Lable lable="Offer Apply Date Range" />
                    <TextInput
                      name="dateRange"
                      type="text"
                      placeholder="Date Range"
                      onChange={handleChange}
                      value={values.dateRange}
                    />
                    <ErrorMessage
                      name="dateRange"
                      component="div"
                      className="error"
                    />
                  </div>
                )}
                <div>
                  <Lable lable="Recursion type" />
                  <Dropdown
                    options={recursion}
                    name="recursionType"
                    value={values.recursionType}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="recursionType"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <Lable lable={"Apply offer after complete no of order"} />
                  <div className="flex items-center ">
                    <div className="border px-2.5 py-2">
                      <input
                        type="checkbox"
                        name="applyOffer"
                        id="applyOffer"
                        checked={isApplyOfferChecked}
                        onChange={(e) =>
                          setIsApplyOfferChecked(e.target.checked)
                        }
                      />
                    </div>
                    <TextInput
                      name="applyOffer"
                      type="number"
                      placeholder="0"
                      onChange={handleChange}
                      value={values.applyOffer}
                      disabled={!isApplyOfferChecked}
                    />
                  </div>
                </div>
                <div>
                  <Lable lable={"Required Uses"} />
                  <div className="flex items-center ">
                    <div className="border px-2.5 py-2">
                      <input
                        type="checkbox"
                        name="requiredUses"
                        id="requiredUses"
                        checked={isRequireUses}
                        onChange={(e) => setIsRequireUses(e.target.checked)}
                      />
                    </div>
                    <TextInput
                      name="requiredUses"
                      type="number"
                      placeholder="0"
                      onChange={handleChange}
                      value={values.requiredUses}
                      disabled={!isRequireUses}
                    />
                  </div>
                </div>
                <div>
                  <Lable
                    lable={"Do you want to set min order amount for apply ?"}
                  />
                  <div className="flex items-center ">
                    <div className="border px-2.5 py-2">
                      <input
                        type="checkbox"
                        name="minOrderAmount"
                        id="minOrderAmount"
                        checked={isMinOrderAmount}
                        onChange={(e) => setIsMinOrderAmount(e.target.checked)}
                      />
                    </div>
                    <TextInput
                      name="minOrderAmount"
                      type="number"
                      placeholder="0"
                      onChange={handleChange}
                      value={values.minOrderAmount}
                      disabled={!isMinOrderAmount}
                    />
                  </div>
                </div>
                <div>
                  <Lable lable={"Do you want to set max discount amount ?"} />
                  <div className="flex items-center ">
                    <div className="border px-2.5 py-2">
                      <input
                        type="checkbox"
                        name="maxDiscountAmount"
                        id="maxDiscountAmount"
                        checked={isMaxDiscountAmount}
                        onChange={(e) =>
                          setIsMaxDiscountAmount(e.target.checked)
                        }
                      />
                    </div>
                    <TextInput
                      name="maxDiscountAmount"
                      type="number"
                      placeholder="0"
                      onChange={handleChange}
                      value={values.maxDiscountAmount}
                      disabled={!isMaxDiscountAmount}
                    />
                  </div>
                </div>
                <div>
                  <Lable
                    lable={"Do you want to set min item on cart for apply ?"}
                  />
                  <div className="flex items-center ">
                    <div className="border px-2.5 py-2">
                      <input
                        type="checkbox"
                        name="minItemCart"
                        id="minItemCart"
                        checked={isMinItemCart}
                        onChange={(e) => setIsMinItemCart(e.target.checked)}
                      />
                    </div>
                    <TextInput
                      name="minItemCart"
                      type="number"
                      placeholder="0"
                      onChange={handleChange}
                      value={values.minItemCart}
                      disabled={!isMinItemCart}
                    />
                  </div>
                </div>
              </Form>
            </SidebarField>
          )}
        </Formik>
      )}
    </div>
  );
};

export default Offers;

const Card = ({handleOpen,item }) => {
  
  const { theme } = useSelector((state) => state.theme);

  return (
    <div
      className={`${
        theme === "light" ? "bg-secondaryColor" : "bg-darkThirsary"
      } shadow-2xl  rounded-xl w-full p-2`}
    >
      <div className="flex justify-between gap-2">
        <img src={promoimg} alt="promo logo" className="w-32" />

        <div className=" w-full flex flex-col justify-evenly">
          <div className="uppercase flex justify-between items-center">
            <span>{item.promoCode} </span>{" "}
            <span
              onClick={handleOpen}
              className=" text-md flex items-center justify-center p-2 border border-hoverColor rounded-full cursor-pointer text-hoverColor hover:bg-hoverColor hover:text-white"
            >
              <MdOutlineEdit />
            </span>
          </div>

          <div>
            <div className="flex gap-2 items-center">
              <span>
                <IoMdInformationCircleOutline />
              </span>
              <span>{item.description}</span>
            </div>
            <div className="flex gap-2 items-center">
              <span>
                <IoMdInformationCircleOutline />
              </span>
              <span>{item.description}</span>
            </div>
            <div className="flex gap-2 items-center">
              <span>
                <IoMdInformationCircleOutline />
              </span>
              <span>{item.description}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
