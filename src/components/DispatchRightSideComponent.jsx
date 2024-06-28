import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";

const DispatchRightSideComponent = () => {
  const { theme } = useSelector((state) => state.theme);
  const [searchQuery, setSearchQuery] = useState("");

  const [leftTabs, setLeftTabs] = useState([
    {
      tab: "New",
      isActive: true,
    },
    {
      tab: "Assigned",
      isActive: false,
    },
    {
      tab: "On Delivery",
      isActive: false,
    },
  ]);

  const data = [
    { id: 1, status: "New" },
    { id: 2, status: "Assigned" },
    { id: 3, status: "On Delivery" },
  ];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((item) => {
    return Object.values(item).some(
      (objValue) =>
        objValue !== null &&
        objValue
          .toString()
          .toLowerCase()
          .includes(searchQuery.trim().toLowerCase())
    );
  });

  const handleSwitch = (t, i) => {
    const updatedTabs = leftTabs.map((item, index) => {
      if (index === i) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
      return item;
    });
    setLeftTabs(updatedTabs);
  };

  const activeTab = leftTabs.find((tab) => tab.isActive);

  const displayedData = activeTab
    ? filteredData.filter((item) => item.status === activeTab.tab)
    : filteredData;

  return (
    <div
      className={`${
        theme === "light" ? "bg-secondaryColor" : "bg-darkThirsary"
      } shadow-2xl px-3 w-1/4 hidden lg:block`}
    >
      <ul className="flex justify-between text-sm cursor-pointer">
        {leftTabs.map((item, i) => (
          <li
            key={i}
            className={`${
              item.isActive ? "border-t-4  border-buttonColor" : ""
            }  w-full text-center py-3`}
            onClick={() => handleSwitch(item, i)}
          >
            {item.tab}
          </li>
        ))}
      </ul>
      <div className="border rounded-full px-3 my-4 py-1.5 text-xs bg-transparent w-full flex justify-between items-center">
        <input
          type="search"
          placeholder="search..."
          value={searchQuery}
          onChange={handleSearch}
          className="bg-transparent outline-none w-full"
        />
        <FaSearch />
      </div>

      <div className="mt-4">
        {displayedData.map((item) => (
          <div key={item.id} className="text-sm p-2 mb-2">
            <h3 className="text-lg font-semibold">{item.status}</h3>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default DispatchRightSideComponent;
