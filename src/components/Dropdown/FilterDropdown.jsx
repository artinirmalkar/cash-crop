import React, { useEffect, useRef, useState } from 'react';
import SelectDropdown from './SelectDropdown';

function FilterDropdown({ key, inputName,label, options, handleFilter }) {
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

    return (<div className='hello'><SelectDropdown inputName={inputName} placeholder={label} options={options} handleFilter={handleFilter}/></div>)


}

export default FilterDropdown