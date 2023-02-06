import React from 'react'
import menu_img from './Images/Menu-coffee-img.jpg'
import {Link} from 'react-router-dom'
import MenuSection from './MenuSection'


const Menu = () => {
  return (
    <>
    <div className='bg-light'>
      <div className='menu-banner'>
        <img src={menu_img} alt="menu-banner-img" />
      </div>
      <h1 className='items'>Snacks Items</h1>
      <br />
      <MenuSection/>
      <h1 className='items'>Meals Items</h1>
      <br />
      <MenuSection/>
      <br />
    </div>
    </>
  )
}

export default Menu;