import React, { useEffect, useRef, useState } from 'react';
import SelectDropdown from './SelectDropdown';

function WeekRangeDropdown({sx,handleFilter}) {
    const [ShowHide, setShowHide] = useState({
        show: false,
        value: "Name",
    });

    const ddRef = useRef();

    const toggle = (val) => {
        setShowHide({
            value: ShowHide.value,
            show: val,
        });
    };


    const hideOutsideClick = (event) => {
        if (
            ddRef.current &&
            !ddRef.current.contains(event.target)
        ) {
            setShowHide({
                value: ShowHide.value,
                show: false,
            });
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", hideOutsideClick);

        return () => {
            document.removeEventListener("mousedown", hideOutsideClick);
        };
    }, []);


    
  const formatDate = date => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
};

function getPastSunday() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    const daysSinceSunday = dayOfWeek === 0 ? 7 : dayOfWeek; // If today is Sunday, consider it as 7 days since Sunday
    const pastSunday = new Date(today);
    pastSunday.setDate(today.getDate() - daysSinceSunday);
    return pastSunday;
}

// Example usage:
const pastSunday = getPastSunday();



const generateDateRanges = (numWeeks) => {
    const dateRanges = [];
    let currentDate = new Date(pastSunday);

    for (let i = 0; i < numWeeks; i++) {
        const weekStart = new Date(currentDate);
        const weekEnd = new Date(currentDate);
        weekEnd.setDate(weekStart.getDate() + 6);

        const dateRange = `${formatDate(weekStart)} - ${formatDate(weekEnd)}`;
        dateRanges.push({name:dateRange, code:dateRange});

        currentDate.setDate(currentDate.getDate() + 7);
    }

    // return dateRanges.reverse(); // Reverse the array to have the recent week at the top
    return dateRanges; // Reverse the array to have the recent week at the top
};



    const WeekRange=generateDateRanges(20)

  return  <SelectDropdown sx={sx?sx:{}} inputName="Week_Range" handleFilter={handleFilter}  placeholder="Week Range"  options={WeekRange}/>

  
}

export default WeekRangeDropdown