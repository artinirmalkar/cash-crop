import React from 'react'
import { useSelector } from 'react-redux'

const Lable = ({lable}) => {
  const {theme} = useSelector((state)=> state.theme)
  return (
    <div className={`text-sm mb-2 ${theme === "light" ? "bg-secondaryColor text-textColorLight" : " text-darkSecondary"} `}>{lable}</div>
  )
}

export default Lable