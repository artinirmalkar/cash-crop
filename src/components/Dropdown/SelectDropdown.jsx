
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function SelectDropdown({inputName, placeholder,options,handleFilter}) {
    const [selected, setSelected] = useState(null);

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center text-sm ">
                    {option.icon?(<img alt={option.name} src={option.icon ? option.icon:"https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"}  className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />):""}
                    <div  className="px-2 text-sm">{option.name}</div>
                </div>
            );
        }

        return <span className="px-2 text-sm">{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {

        return (
            <div className="flex align-items-center  text-sm  w-full">
                {option.icon?(<img alt={option.name} src={option.icon ? option.icon:"https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"}  className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />):""}
                <div className="py-1.5 px-3  text-sm w-full ">{option.name}</div>
            </div>
        );
    };

    const handleSelect=(e)=> {
        console.log("e.value",e.value);
        setSelected(e.value)
        handleFilter(inputName,e.value)
    }

    return (
        <div className="card flex justify-content-center text-sm border rounded-full">
            <Dropdown  value={selected} onChange={(e) =>handleSelect(e)} options={options?options:[]} optionLabel="name" placeholder={placeholder} 
                filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full text-sm py-1 px-1.5 border rounded-full " />
        </div>    
    )
}
        