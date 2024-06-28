import React, { useState } from "react";
import { Calendar } from "primereact/calendar";

export default function CalendarComp({sx, handleFilter,...restProps}) {
  const [dates, setDates] = useState(null);
  const handleDateRange = (e) => {
    setDates(e.value);
    handleFilter("month_range", e.value);
  };
  return (
    <div  style={sx?sx:{}} className="card flex justify-center bg-transparent">
      <Calendar
       
        placeholder="Select Dates"
        value={dates}
        onChange={(e) => handleDateRange(e)}
        selectionMode="range"      
        readOnlyInput
        {...restProps}
      />
    </div>
  );
}
