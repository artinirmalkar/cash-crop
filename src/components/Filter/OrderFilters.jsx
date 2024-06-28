import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { PiSquaresFour } from "react-icons/pi";
import { TfiMenuAlt } from "react-icons/tfi";
import Button, { SecondaryButton } from "../Button";
import CalendarComp from "../CalendarComp/CalendarComp";
import FilterDropdown from "../Dropdown/FilterDropdown";
import SelectDropdown from "../Dropdown/SelectDropdown";
import WeekRangeDropdown from "../Dropdown/WeekRange";
import styles from '../Table/Styles.module.css';

const FiltersComp = ({
  layoutView,
  SearchBy,
  handleFilter,
  filters,
  WeekRange,
  MonthRange,
}) => {
  const searchRef = useRef();
  const filterRef = useRef();
  const deliveryTypeRef = useRef();
  const [gridToggle, SetGridToggle] = useState(false);

  const [searchShowHide, setSearShowHide] = useState({
    show: false,
    value: "Name",
  });

  const [filterShowHide, setFilterShowHide] = useState({
    show: false,
    value: "Name",
  });

  const [deliveryShowHide, setDeliveryShowHide] = useState({
    show: false,
    value: "Name",
  });

  const hideOutsideClick = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearShowHide({
        value: searchShowHide.value,
        show: false,
      });
    }
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setFilterShowHide({
        value: filterShowHide.value,
        show: false,
      });
    }
    if (
      deliveryTypeRef.current &&
      !deliveryTypeRef.current.contains(event.target)
    ) {
      setDeliveryShowHide({
        value: deliveryShowHide.value,
        show: false,
      });
    }
  };

  const toggleFilter = (val) => {
    setFilterShowHide({
      value: filterShowHide.value,
      show: val,
    });
  };
  
  const toggleSearch = (val) => {
    setSearShowHide({
      value: searchShowHide.value,
      show: val,
    });
  };

  useEffect(() => {
    document.addEventListener("mousedown", hideOutsideClick);

    return () => {
      document.removeEventListener("mousedown", hideOutsideClick);
    };
  }, []);

  return (
    <>
      <div className={styles.subcontainer1}>
        {layoutView ? (
          <>
            <div
              onClick={() => SetGridToggle(false)}
              style={{ cursor: "pointer" }}
            >
              <TfiMenuAlt
                size={"1.3rem"}
                color={gridToggle ? "black" : "#145388"}
              />
            </div>
            <div
              onClick={() => SetGridToggle(true)}
              style={{ cursor: "pointer" }}
            >
              <PiSquaresFour
                size={"1.9rem"}
                color={!gridToggle ? "black" : "#145388"}
              />
            </div>
          </>
        ) : (
          ""
        )}
       
        {SearchBy.options.length ? (
          <SelectDropdown
            inputName={SearchBy.inputName}
            placeholder={SearchBy.filtertype}
            options={SearchBy.options}
            handleFilter={handleFilter}
          />
        ) : null}

        {SearchBy.options.length ? (
          <div className="border rounded-full px-3 py-1.5 text-sm w-fit flex justify-between items-center">
            <input
              type="text"
              className=" outline-none"
              placeholder="Search"
            />
            <CiSearch size={"1.1rem"} />
          </div>
        ) : null}

      {filters &&
          filters.map((f, i) => (
            <FilterDropdown
              key={i}
              inputName={SearchBy.inputName}
              label={f.filtertype}
              options={f.options}
              handleFilter={handleFilter}
            />
          ))}
          
        {WeekRange ? <WeekRangeDropdown handleFilter={handleFilter} /> : ""}
        {MonthRange ? <CalendarComp handleFilter={handleFilter} /> : ""}

        {SearchBy.options.length ? (
          <>   
            <SecondaryButton text={"Clear Filter"} type={"submit"} padding={'py-2 px-3'}/>
            <Button text={'Apply'} type={'submit'}/>
          </>
        ) : null}
      </div>
    </>
  );
};

export default FiltersComp;
