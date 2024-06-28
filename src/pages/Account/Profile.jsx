import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import Button, { SecondaryButton } from "../../components/Button";
import Lable from "../../components/Lable";
import SidebarField from "../../components/Sidebar/SidebarField";
import TextInput from "../../components/TextInput";
import { FormField } from "../../components/FormField";
import { RxCross2 } from "react-icons/rx";
import Dropdown from "../../components/Dropdown";
import { ErrorMessage, Form, Formik } from "formik";
import promoimg from "../../assest/offer_promo.png";
import { MdEdit } from "react-icons/md";
import Phone from "../../components/Phone";
import PasswordInput from "../../components/PasswordInput";
import DeleteModal from "../../components/DeleteModal";
import cartImage from '../../assest/card_not_found.png';
import AddCardDetailModal from '../../components/AddCardDetailModal'

const Profile = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className="p-4">
      <BreadCrumb title={"Profile"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <StoreDetails theme={theme} />
        <Documents theme={theme} />
        <Wallet theme={theme} />
        <BankDetails theme={theme} />
        <Redeem theme={theme} />
        <ContactAdmin theme={theme} />
      </div>
    </div>
  );
};

export default Profile;

const StoreDetails = ({ theme }) => {
  const [visible, setVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <>
      <div
        className={`p-5 w-full rounded-lg shadow-2xl ${
          theme === "light" ? "bg-secondaryColor" : "bg-darkThirsary"
        }`}
      >
        <div className="flex justify-between mb-3 border-b py-4 flex-wrap">
          <p className="text-lg font-bold">Store details</p>
          <div className="flex gap-2">
            <SecondaryButton
              text="Delete account"
              textColor={"text-red-800"}
              borderColor={"border-red-800"}
              onClick={() => setDeleteModalVisible(true)}
            />
            <SecondaryButton text="Edit" onClick={() => setVisible(true)} />
          </div>
        </div>
        <div className="mb-3">
          <p className="text-sm">Name</p>
          <p className="text-sm">Demo Rajesh</p>
        </div>
        <div className="mb-3">
          <p className="text-sm">Email</p>
          <p className="text-sm">demorajesh@edelivery.com</p>
        </div>
        <div className="mb-3">
          <p className="text-sm">Phone</p>
          <p className="text-sm">99888289921</p>
        </div>
        <div className="mb-3">
          <p className="text-sm">Address</p>
          <p className="text-sm">Bilaspur</p>
        </div>
        <div className="mb-3">
          <p className="text-sm">Referral code</p>
          <p className="text-sm">INHOJJ7S</p>
        </div>
        <div className="mb-3">
          <p className="text-sm">Delivery type</p>
          <p className="text-sm">Restaurant</p>
        </div>
        <div className="mb-3">
          <p className="text-sm">Wallet</p>
          <p className="text-sm">₹ 30</p>
        </div>
        <div className="mb-3">
          <p className="text-sm">Total referred</p>
          <p className="text-sm">0</p>
        </div>
      </div>

      {visible ? (
        <Formik
          initialValues={{
            name: "",
            address: "",
            email: "",
            phone: "",
            new_password: "",
            confirm_password: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ handleChange, values, handleSubmit }) => (
            <SidebarField
              handleClose={() => setVisible(false)}
              title="Edit profile"
              button1={
                <Button
                  text="Cancel"
                  type="button"
                  onClick={() => setVisible(false)}
                />
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
                <FormField>
                  <Lable lable="Store name | EN" />
                  <TextInput
                    name="name"
                    type="text"
                    placeholder="Store name"
                    onChange={handleChange}
                    value={values.name}
                  />
                  <ErrorMessage name="name" component="div" className="error" />
                </FormField>
                <FormField>
                  <Lable lable="Address" />
                  <TextInput
                    name="address"
                    type="text"
                    placeholder="Address"
                    onChange={handleChange}
                    value={values.address}
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="error"
                  />
                </FormField>
                <FormField>
                  <Lable lable="Email" />
                  <TextInput
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </FormField>
                <FormField>
                  <Lable lable="Phone" />
                  <Phone value={values.phone} name="phone" />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="error"
                  />
                </FormField>
                <FormField>
                  <Lable lable="New password" />
                  <PasswordInput
                    name="new_password"
                    type="text"
                    placeholder="New Password"
                    onChange={handleChange}
                    value={values.new_password}
                  />
                  <ErrorMessage
                    name="new_password"
                    component="div"
                    className="error"
                  />
                </FormField>
                <FormField>
                  <Lable lable="Confirm password" />
                  <PasswordInput
                    name="confirm_password"
                    type="text"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    value={values.confirm_password}
                  />
                  <ErrorMessage
                    name="confirm_password"
                    component="div"
                    className="error"
                  />
                </FormField>
              </Form>
            </SidebarField>
          )}
        </Formik>
      ) : null}

      {deleteModalVisible ? (
        <DeleteModal
          modalVisible={deleteModalVisible}
          handleClose={() => setDeleteModalVisible(false)}
        />
      ) : null}
    </>
  );
};

const Documents = ({ theme }) => {
  const [visible, setVisible] = useState(false);

  const handleSubmit = () => {};

  return (
    <>
      <div
        className={`p-5 w-full rounded-lg shadow-2xl ${
          theme === "light" ? "bg-secondaryColor" : "bg-darkThirsary"
        }`}
      >
        <div className="flex justify-between mb-3 border-b py-4">
          <p className="text-lg font-bold">Documents</p>
          <SecondaryButton text="Add" onClick={() => setVisible(true)} />
        </div>
        <div className=" py-4">
          <p className="text-red-800 text-sm pb-3">
            * indicates mandatory documents
          </p>
          <p>
            Food License &nbsp;<span className="text-red-800">*</span>
          </p>
          {/* Card */}
          <div className="flex w-fit gap-4 p-3 my-4">
            <img
              src="https://apiedelivery.elluminatiinc.net/store_documents/660d51367b5d464723699b71cIem.jpg"
              alt=""
              className="w-2"
            />
            <div>
              <p className="text-xs">Expired date :</p>
              <p>Jun 30, 2024</p>
              <p className="text-xs mt-2">Unique code</p>
              <p>7899</p>
            </div>
          </div>
        </div>
        <div className="border-b"></div>
      </div>

      {visible ? (
        <SidebarField
          handleClose={() => setVisible(false)}
          title="Edit document"
          button1={
            <Button
              text="Cancel"
              type="button"
              onClick={() => setVisible(false)}
            />
          }
          button2={<Button text="Submit" onClick={handleSubmit} />}
        >
          <h1>Edit Documents</h1>
        </SidebarField>
      ) : null}
    </>
  );
};

const Wallet = ({ theme }) => {
  const [visible, setVisible] = useState(false)
  const [isCardDeailsModalOpen, setIsCardDeailsModalOpen] = useState(false)
  const [isAddWalletBalanceVisibile, setIsAddWalletBalanceVisbile] = useState(false)
  return (
    <>
      <div
        className={`p-5 w-full rounded-lg shadow-2xl ${
          theme === "light" ? "bg-secondaryColor" : "bg-darkThirsary" 
        }`}
      >
        <div className="flex justify-between mb-3 flex-wrap-reverse">
          {isAddWalletBalanceVisibile ? <div className="w-[50%]"><TextInput placeholder={'0'}/></div> :<div>
            <p className="text-lg font-bold">Current wallet balance :</p>
            <p className="text-buttonColor text-sm">INR 30</p>
          </div>}
          <div className="flex flex-col justify-end items-end gap-1">
            <p className="cursor-pointer float-end hover:text-buttonColor text-sm" onClick={()=>setVisible(true)}>View redeem history</p>
              {isAddWalletBalanceVisibile ? <div className="flex gap-2"><SecondaryButton text="Submit" onClick={()=>setIsAddWalletBalanceVisbile(false)}/><RxCross2 className="cursor-pointer" onClick={()=>setIsAddWalletBalanceVisbile(false)}/></div> : <SecondaryButton text="Add" onClick={()=>setIsAddWalletBalanceVisbile(true)}/>}
          </div>
        </div>
        <div className="flex justify-between my-5">
          <p className="text-lg font-bold">Card details</p>
          <SecondaryButton text="Add" onClick={()=>setIsCardDeailsModalOpen(true)}/>
        </div>
          <Button text="Stripe" />
          <img src={cartImage} alt="Cart" className="w-1"/>
      </div>

      {visible ? (
          <SidebarField
            handleClose={() => setVisible(false)}
            title="Redeem history"
          >
            <img src={cartImage} alt="" />
          </SidebarField>
      ) : null}

      {isCardDeailsModalOpen? <AddCardDetailModal modalVisible={isCardDeailsModalOpen} handleClose={()=> setIsCardDeailsModalOpen(false)}/>: null}
    </>
  );
};

const BankDetails = ({ theme }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <>
      <div
        className={`p-5 w-full rounded-lg shadow-2xl ${
          theme === "light" ? "bg-secondaryColor" : "bg-darkThirsary"
        }`}
      >
        <div className="flex justify-between mb-3">
          <p className="text-lg font-bold">Bank details</p>
          <SecondaryButton
            text="Add"
            onClick={() => {
              setOpenSidebar(true);
            }}
          />
        </div>
        <div className="mb-3">
          <p className="text-sm">Account holder name</p>
          {/* <p className="text-sm">elluminati.edelivery@gmail.com</p> */}
        </div>
        <div className="mb-3">
          <p className="text-sm">Account number</p>
          {/* <p className="text-sm">1234567890</p> */}
        </div>
        <div className="mb-3">
          <p className="text-sm">Routing number</p>
          {/* <p className="text-sm">1234567890</p> */}
        </div>
        <div className="mb-3">
          <p className="text-sm">Bank code</p>
          {/* <p className="text-sm">1234567890</p> */}
        </div>
      </div>
      {/* // Bank Details Sidebar @start */}
      {openSidebar ? (
        <Formik
          initialValues={{
            account_holder_name: "",
            account_number: "",
            bank_code: "",
            routing_number: "",
            address: "",
            dob: "",
            gender: "",
            personal_id_number: "",
            postal_code: "",
            state: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ handleChange, values, handleSubmit }) => (
            <SidebarField
              handleClose={() => setOpenSidebar(false)}
              title="Bank details"
              button1={
                <Button
                  text="Cancel"
                  type="button"
                  onClick={() => setOpenSidebar(false)}
                />
              }
              button2={<Button text="Submit" onClick={handleSubmit} />}
            >
              <Form className="w-full gap-4 flex flex-col bg-transparent py-5 px-3">
                <FormField label="Account holder name">
                  <TextInput
                    name="account_holder_name"
                    type="text"
                    placeholder={"Account holder name"}
                    value={values.account_holder_name}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="account_holder_name"
                    component="div"
                    className="error"
                  />
                </FormField>
                <FormField label="Account number">
                  <TextInput
                    name="account_number"
                    placeholder={"Account number"}
                    type="number"
                    value={values.account_number}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="account_number"
                    component="div"
                    className="error"
                  />
                </FormField>
                <FormField label="Bank code">
                  <TextInput
                    name="bank_code"
                    placeholder={"Bank code"}
                    type="text"
                    value={values.bank_code}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="bank_code"
                    component="div"
                    className="error"
                  />
                </FormField>
                <FormField label="Routing number">
                  <TextInput
                    name="routing_number"
                    placeholder={"Routing number"}
                    type="text"
                    value={values.routing_number}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="routing_number"
                    component="div"
                    className="error"
                  />
                </FormField>
                <FormField label="Address">
                  <TextInput
                    name="address"
                    placeholder={"Address"}
                    type="text"
                    value={values.address}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="error"
                  />
                </FormField>
                <FormField label="D.o.b">
                  <TextInput
                    name="dob"
                    placeholder={"D.o.b"}
                    type="text"
                    value={values.dob}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="dob" component="div" className="error" />
                </FormField>
                <FormField label="Gender">
                  <Dropdown
                    options={[{}]}
                    name="gender"
                    placeholder={"Gender"}
                    value={values.gender}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="error"
                  />
                </FormField>
                <FormField label="Personal id number">
                  <TextInput
                    name="personal_id_number"
                    type="text"
                    placeholder={"Personal id number"}
                    value={values.personal_id_number}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="personal_id_number"
                    component="div"
                    className="error"
                  />
                </FormField>
                <FormField label="Postal code">
                  <TextInput
                    name="postal_code"
                    placeholder={"Postal code"}
                    type="text"
                    value={values.postal_code}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="postal_code"
                    component="div"
                    className="error"
                  />
                </FormField>
                <FormField label="State">
                  <TextInput
                    name="state"
                    placeholder={"State"}
                    type="text"
                    value={values.state}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="state"
                    component="div"
                    className="error"
                  />
                </FormField>
                <div className="flex justify-between w-fit">
                  <div className="flex flex-col gap-1 items-center">
                    <img
                      src="https://storeedelivery.elluminatiinc.net/assets/img/default_images/category.png"
                      alt=""
                      className="w-12"
                    />
                    <p>Front Photo</p>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <img
                      src="https://storeedelivery.elluminatiinc.net/assets/img/default_images/category.png"
                      alt=""
                      className="w-12"
                    />
                    <p>Back Photo</p>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <img
                      src="https://storeedelivery.elluminatiinc.net/assets/img/default_images/category.png"
                      alt=""
                      className="w-12"
                    />
                    <p>Additional Photo</p>
                  </div>
                </div>
              </Form>
            </SidebarField>
          )}
        </Formik>
      ) : null}
      {/* // Bank Details Sidebar @end */}
    </>
  );
};

const Redeem = ({ theme }) => {

 
  const [visible, setVisible] = useState(false);
  

  return (
    <>
      <div
        className={`p-5 w-full rounded-lg shadow-2xl ${
          theme === "light" ? "bg-secondaryColor" : "bg-darkThirsary"
        }`}
      >
        <div className="flex justify-between mb-3 py-4">
          <p className="text-lg font-bold">Redeem points</p>
          <p
            className="cursor-pointer hover:text-buttonColor text-sm"
            onClick={() => setVisible(true)}
          >
            View redeem history
          </p>
        </div>
        <Lable lable="Total redeem points : 7" />
        <div className="grid grid-cols-2 gap-3 my-3 mx-1">
          <TextInput placeholder="Enter Points" name="redeem" type="text" />
          <SecondaryButton text={"Redeem"} />
        </div>
      </div>
      {visible ? (
        <SidebarField
          handleClose={() => setVisible(false)}
          title="Redeem history"
        >
          <img src={cartImage} alt="" />
        </SidebarField>
      ) : null}
    </>
  );
};

const ContactAdmin = ({ theme }) => {
  return (
    <div
      className={`p-5 w-full rounded-lg shadow-2xl ${
        theme === "light" ? "bg-secondaryColor" : "bg-darkThirsary"
      }`}
    >
      <p className="text-lg font-bold mb-3">Contact admin</p>
      <div className="mb-3">
        <p className="text-sm">Email</p>
        <p className="text-sm">elluminati.edelivery@gmail.com</p>
      </div>
      <div className="mb-3">
        <p className="text-sm">Phone</p>
        <p className="text-sm">1234567890</p>
      </div>
      <Link href={"#"} className="text-sm mb-3 hover:text-buttonColor ">
        <p>Terms & conditions</p>
      </Link>
      <Link href={"#"} className="text-sm mb-3 hover:text-buttonColor ">
        <p>Privacy policy</p>
      </Link>
    </div>
  );
};
