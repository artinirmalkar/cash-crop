import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const TimeFormate = (index) => {
  const [startHourCount, setStartHourCount] = useState(0);
  const [startMinuteCount, setStartMinuteCount] = useState(0);
  const [endHourCount, setEndHourCount] = useState(0);
  const [endMinuteCount, setEndMinuteCount] = useState(0);

  function startHourIncrement() {
    setStartHourCount((prev) => (prev + 1) % 13);
  }
  function startHourDecrement() {
    setStartHourCount((prev) => (prev - 1 + 13 ) % 13);
  }
  function startMinuteIncrement() {
    setStartMinuteCount((prev) => (prev + 1) % 61);
  }
  function startMinuteDecrement() {
    setStartMinuteCount((prev) => (prev - 1 + 61) % 61);
  }


  function endHourIncrement() {
    setEndHourCount((prev) => (prev + 1) % 13);
  }
  function endHourDecrement() {
    setEndHourCount((prev) => (prev - 1 + 13 ) % 13);
  }
  function endMinuteIncrement() {
    setEndMinuteCount((prev) => (prev + 1) % 61);
  }
  function endMinuteDecrement() {
    setEndMinuteCount((prev) => (prev - 1 + 61) % 61);
  }

  return (
    <div className="flex flex-col gap-3 mt-5">
      <div>Open Time</div>
      <div>
        <div className="flex gap-2 items-center">
          <div className="flex flex-col gap-2 items-center">
            <IoIosArrowUp
              className="cursor-pointer"
              onClick={startHourIncrement}
            />
            <span className="border h-10 w-14 flex items-center justify-center">
              {startHourCount === 0 ? "HH" : startHourCount}
            </span>
            <IoIosArrowDown
              className="cursor-pointer"
              onClick={startHourDecrement}
            />
          </div>

          <div>:</div>

          <div className="flex flex-col gap-2 items-center">
            <IoIosArrowUp
              className="cursor-pointer"
              onClick={startMinuteIncrement}
            />
            <span className="border h-10 w-14 flex items-center justify-center">
              {startMinuteCount === 0 ? "MM" : startMinuteCount}
            </span>
            <IoIosArrowDown
              className="cursor-pointer"
              onClick={startMinuteDecrement}
            />
          </div>

          <div className="border h-10 w-14 flex items-center justify-center">
            AM
          </div>
        </div>
      </div>

      <div>Close Time</div>
      <div>
        <div className="flex gap-2 items-center">
          <div className="flex flex-col gap-2 items-center">
            <IoIosArrowUp className="cursor-pointer" onClick={endHourIncrement}/>
            <span className="border h-10 w-14 flex items-center justify-center">
                {endHourCount === 0 ? "HH" : endHourCount}
            </span>
            <IoIosArrowDown className="cursor-pointer" onClick={endHourDecrement}/>
          </div>

          <div>:</div>

          <div className="flex flex-col gap-2 items-center">
            <IoIosArrowUp className="cursor-pointer" onClick={endMinuteIncrement}/>
            <span className="border h-10 w-14 flex items-center justify-center">
                {endMinuteCount === 0 ? "HH" : endMinuteCount}
            </span>
            <IoIosArrowDown className="cursor-pointer" onClick={endMinuteDecrement}/>
          </div>
          <div className="border h-10 w-14 flex items-center justify-center">
            AM
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeFormate;
