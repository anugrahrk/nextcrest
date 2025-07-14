import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dishes from '../pages/Dishes'
import Dropdown from './Dropdown'
import logo from '../assets/logo.svg'
import { useRecoilState, useRecoilValue } from 'recoil'
import { cartValueState } from '../atom/atom'


function Header() {
  const cart=useRecoilValue(cartValueState)
  const cartlocal=localStorage.getItem('cart')
  const dishes=JSON.parse(localStorage.getItem('dish'))||0
  return (
    <div className='flex justify-between pb-5'>
       

        <div className='font-bold text-2xl font-sans pl-30 pt-5 flex'>
          <img src={logo} alt="" className='h-6 m-1'/>FoodCrest</div>
     <div className='flex justify-between'>
            <div className='font-semibold text-xl font-sans text-slate-700 pt-4 pr-5'><Link to='/'>Home</Link></div>
            <div className='flex '>
            <Dropdown/>

            </div>
            <div className='font-semibold text-xl font-sans text-slate-700 pt-4 pr-5'><Link to='/About'>About</Link></div>
            <div className='font-semibold text-xl font-sans text-slate-700 pt-4 pr-5'><Link to='/Menu'>Menu</Link></div>
            <div className='font-semibold text-xl font-sans text-slate-700 pt-4 pr-5'><Link to='/Review'>Review</Link></div>
            <div className='pt-3 pr-5 flex'> <Link to='/Cart'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg></Link>
<div className='text-white bg-amber-500 rounded-full h-6 w-6 flex justify-center'>{dishes.length==cartlocal?cartlocal:0}</div></div>
            <div className='pr-30 pt-2'>
            <button class="bg-transparent text-amber-600 font-semibold py-2 px-4 border-3 border-amber-600 rounded-full hover:bg-amber-600 hover:text-white ">
 Login
</button></div>


        </div>
    </div>
  )
}

export default Header