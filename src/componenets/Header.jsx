import React from 'react'
import { Link } from 'react-router-dom'
import Dishes from '../pages/Dishes'


function Header() {
  return (
    <div className='flex justify-between'>
        <div className='font-bold text-2xl font-sans pl-30 pt-5'>FoodCrest</div>
        <div className='flex justify-between'>
            <div className='font-semibold text-xl font-sans text-slate-700 pt-4 pr-5'>Home</div>
            <div className='flex '>
            <div className='font-semibold text-xl font-sans text-slate-700 pt-4 pr-1'><Link to='/Dishes'>Dishes</Link></div>
                <div className='pt-6 pr-5'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg></div>

            </div>
            <div className='font-semibold text-xl font-sans text-slate-700 pt-4 pr-5'>About</div>
            <div className='font-semibold text-xl font-sans text-slate-700 pt-4 pr-5'>Menu</div>
            <div className='font-semibold text-xl font-sans text-slate-700 pt-4 pr-5'>Reviews</div>
            <div className='pr-30 pt-2'>
            <button class="bg-transparent text-amber-600 font-semibold py-2 px-4 border-3 border-amber-600 rounded-full hover:bg-amber-600 hover:text-white ">
 Login
</button></div>

        </div>
    </div>
  )
}

export default Header