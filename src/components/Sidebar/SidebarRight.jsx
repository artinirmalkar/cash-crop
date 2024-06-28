import React from 'react'
import { useSelector } from 'react-redux'

const SidebarRight = ({children}) => {
    const {theme} = useSelector((state)=> state.theme)
  return (
    <div className={` ${theme ==='light' ? 'bg-secondaryColor text-textColorLight' : 'bg-darkThirsary text-darkSecondary'} text-sm hidden lg:block h-screen w-1/5 fixed right-0 shadow-2xl p-5 rounded-tl-xl rounded-bl-xl`}>{children}</div>
  )
}

export default SidebarRight