'use client'
import React, { useState } from 'react'
import Button from '../../../node_modules/react-bootstrap/esm/Button'
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
const Navbar = () => {

  const [showSubMenu, setShowSubMenu] = useState(false);
  const handleClick = () => {
    // Đảo ngược trạng thái của submenu
    setShowSubMenu(!showSubMenu);
  };

  return (
    <header className='bg-background'>
     <div className="container pt-4 ">
      <div className="nav row pb-3">
        <div className="col-5">
          <a href="#" className='text-blackish no-underline text-2xl'>Trek Booking</a>
        </div>
        <div className="col-7 hidden lg:block ">
          <ul className='flex no-underline justify-around'>
            <li className='flex'>
      <img src="globe.png" alt="" className='pr-2 '/>
              <a className='no-underline text-accent'  href="">
              EN/VI</a></li>
            <li className='flex'>
              <img src="cart.png" alt="" className='pr-2'/>
              <a className='no-underline text-accent' href="">Cart(1)</a>
              </li>
            <li className='flex'>
            <img src="bell.png" alt="" className='pr-2'/>
              <a className='no-underline text-accent' href="">Notification</a>
              </li>
            <li className='flex'>
            <img src="users.png" alt="" className='pr-2'/>
              <a className='no-underline text-accent' href="">Log In/ Sign up</a>
              </li>
          </ul>
          </div>
          <div className="col-7  lg:hidden cursor-pointer"  onClick={handleClick}>
          <CiMenuBurger style={{float:"right",fontSize:"22px",}}/>
          </div>
          {showSubMenu && (
        <div className="sub-menu-mobi flex justify-center ">
       <ul className='lg:hidden'>
        <li  className='flex pb-4'>
        <img src="cart.png" alt="" className='pr-2'/>
          <a href="">Cart</a></li>
        <li className='flex pb-4'>
        <img src="bell.png" alt="" className='pr-2'/>
          <a href="">Notification</a></li>
        <li className='flex pb-4'>
        <img src="users.png" alt="" className='pr-2'/>
          <a href="">Log In/ Sign up</a></li>
      
       </ul>
        </div>
      )}
      </div>
     </div>

    </header>
  )
}

export default Navbar