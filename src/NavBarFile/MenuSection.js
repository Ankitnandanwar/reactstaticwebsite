import React, { useState } from 'react'
import MenuDetails from './MenuApi'
import MenuCard from './MenuCard'
import './MenuStyle.css'

const MenuSection = () => {

  const [menuData, setmenuData] = useState(MenuDetails)
  return (
    <>
        <MenuCard menuData={menuData}/>
    </>
  )
}

export default MenuSection