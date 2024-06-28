// import React, { useEffect, useRef, useState } from "react";
// import styles from "../../../Pages/Users/Users/users.module.css";
// import { TfiMenuAlt } from "react-icons/tfi";
// import { PiSquaresFour } from "react-icons/pi";
// import { RiArrowDropDownFill } from "react-icons/ri";
// import { CiSearch } from "react-icons/ci";
// import Button, { SecondaryButton } from "../Button";

// const Filters = ({ SetGridToggle, gridToggle, type }) => {
//   const searchRef = useRef();
//   const filterRef = useRef();
//   const deliveryTypeRef = useRef();
//   const [toggleUsers, SetToggleUser] = useState(true);
//   //   const [gridToggle, SetGridToggle] = useState(false);
//   const [searchShowHide, setSearShowHide] = useState({
//     show: false,
//     value: "Name",
//   });
//   console.log("searchShowHide==>", searchShowHide);
//   const [filterShowHide, setFilterShowHide] = useState({
//     show: false,
//     value: "Name",
//   });
//   const [deliveryShowHide, setDeliveryShowHide] = useState({
//     show: false,
//     value: "Name",
//   });

//   const hideOutsideClick = (event) => {
//     if (searchRef.current && !searchRef.current.contains(event.target)) {
//       setSearShowHide({
//         value: searchShowHide.value,
//         show: false,
//       });
//     }
//     if (filterRef.current && !filterRef.current.contains(event.target)) {
//       setFilterShowHide({
//         value: filterShowHide.value,
//         show: false,
//       });
//     }
//     if (
//       deliveryTypeRef.current &&
//       !deliveryTypeRef.current.contains(event.target)
//     ) {
//       setDeliveryShowHide({
//         value: deliveryShowHide.value,
//         show: false,
//       });
//     }
//   };

//   const toggleFilter = (val) => {
//     setFilterShowHide({
//       value: filterShowHide.value,
//       show: val,
//     });
//   };
//   const toggleSearch = (val) => {
//     setSearShowHide({
//       value: searchShowHide.value,
//       show: val,
//     });
//   };
//   const toggleDelivery = (val) => {
//     setDeliveryShowHide({
//       value: deliveryShowHide.value,
//       show: val,
//     });
//   };

//   const fiterFileds = [
//     {
//       name: "Wallet Negative",
//     },
//     {
//       name: "Document Expired",
//     },
//     {
//       name: "Document Uploaded",
//     },
//     {
//       name: "Email Verified",
//     },
//     {
//       name: "Phone Verified",
//     },
//   ];

//   const DeiveryType = [
//     {
//       name: "Wallet Negative",
//     },
//     {
//       name: "Document Expired",
//     },
//     {
//       name: "Document Uploaded",
//     },
//     {
//       name: "Email Verified",
//     },
//     {
//       name: "Phone Verified",
//     },
//     {
//       name: "Wallet Negative",
//     },
//     {
//       name: "Document Expired",
//     },
//     {
//       name: "Document Uploaded",
//     },
//     {
//       name: "Email Verified",
//     },
//     {
//       name: "Phone Verified",
//     },
//   ];

//   useEffect(() => {
//     document.addEventListener("mousedown", hideOutsideClick);

//     return () => {
//       document.removeEventListener("mousedown", hideOutsideClick);
//     };
//   }, []);
//   return (
//     <>
//       <div className={styles.subcontainer1}>
//         <div onClick={() => SetGridToggle(false)} style={{ cursor: "pointer" }}>
//           <TfiMenuAlt
//             size={"1.3rem"}
//             color={gridToggle ? "black" : "#145388"}
//           />
//         </div>
//         <div onClick={() => SetGridToggle(true)} style={{ cursor: "pointer" }}>
//           <PiSquaresFour
//             size={"1.9rem"}
//             color={!gridToggle ? "black" : "#145388"}
//           />
//         </div>
//         <div style={{ position: "relative" }}>
//           <div onClick={() => toggleSearch(!searchShowHide.show)}>
//             Search By : {searchShowHide.value} <RiArrowDropDownFill />
//           </div>
//           <div
//             ref={searchRef}
//             className={`${
//               searchShowHide.show
//                 ? [`${styles.options} ${styles.optionShow}`]
//                 : [`${styles.options} ${styles.optionHide}`]
//             }`}
//           >
//             <div value="name" onClick={() => toggleSearch(false)}>
//               Name
//             </div>
//             <div value="category" onClick={() => toggleSearch(false)}>
//               Category
//             </div>
//             <div value="id" onClick={() => toggleSearch(false)}>
//               Id
//             </div>
//           </div>
//         </div>
//         <div>
//           <input
//             type="search"
//             placeholder="Search...."
//           />
//           <CiSearch size={"1.1rem"} />
//         </div>
//         {type === "store" && (
//           <div style={{ position: "relative" }}>
//             <div
//               className={styles.border}
//               onClick={() => toggleDelivery(!deliveryShowHide.show)}
//             >
//               Delivery Type <RiArrowDropDownFill />
//             </div>
//             <div
//               ref={deliveryTypeRef}
//               className={
//                 deliveryShowHide.show
//                   ? [`${styles.filter__options} ${styles.filter__optionShow}`]
//                   : [`${styles.filter__options} ${styles.filter__optionHide}`]
//               }
//             >
//               {DeiveryType.map((item, i) => (
//                 <div
//                   onClick={() => toggleFilter(false)}
//                   value="name"
//                   style={{
//                     display: "flex",

//                     gap: "0.7rem",
//                     cursor: "pointer",
//                     width: "100%",
//                   }}
//                 >
//                   <input
//                     type="checkbox"
//                     name=""
//                     id=""
//                     style={{ width: "15px" }}
//                   />
//                   <label htmlFor="" style={{ fontSize: "14px" }}>
//                     {item?.name}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//         <div style={{ position: "relative" }}>
//           <div
            
//             onClick={() => toggleFilter(!filterShowHide.show)}
//           >
//             Filter <RiArrowDropDownFill />
//           </div>
//           <div
//             ref={filterRef}
//             className={
//               filterShowHide.show
//                 ? [`${styles.filter__options} ${styles.filter__optionShow}`]
//                 : [`${styles.filter__options} ${styles.filter__optionHide}`]
//             }
//           >
//             {fiterFileds.map((item, i) => (
//               <div
//                 onClick={() => toggleFilter(false)}
//                 value="name"
//                 style={{
//                   display: "flex",

//                   gap: "0.7rem",
//                   cursor: "pointer",
//                   width: "100%",
//                 }}
//               >
//                 <input
//                   type="checkbox"
//                   name=""
//                   id=""
//                   style={{ width: "15px" }}
//                 />
//                 <label htmlFor="" style={{ fontSize: "14px" }}>
//                   {item?.name}
//                 </label>
//               </div>
//             ))}
//           </div>
//         </div>

//         <SecondaryButton
//           text={"Clear Filter"}
//           type={"submit"}
//           padding={"py-2 px-3"}
//         />
//         <Button text={"Apply"} type={"submit"} />
//       </div>
//     </>
//   );
// };

// export default Filters;
