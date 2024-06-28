import React from 'react'
import { useSelector } from 'react-redux';

const Card = ({ item }) => {
    const { theme } = useSelector((state) => state.theme);
    return (
      <div
        className={`${
          theme === "light" ? "bg-secondaryColor" : "bg-darkThirsary"
        } shadow-2xl cursor-pointer flex items-center gap-5  rounded-xl w-full px-3 py-5`}
      >
        <img
          src={item.img}
          alt="img"
          className="object-cover rounded-full h-16 w-16"
        />
  
        <p>{item.name}</p>
      </div>
    );
  };

export default Card