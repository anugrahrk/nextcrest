import React from 'react'
import Header from '../componenets/Header'
import Aboutimg from '../assets/about.png'


function About() {
  return (
    <div>
    <Header/>
    <div className='text-center pt-10 text-3xl font-bold text-slate-800 pb-2'>
        Why Choose Us?
    </div>
    <div className='flex pt-15'>
        <img src={Aboutimg} alt="" />
        <div>
        <div className='w-180 pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
         <button class="bg-transparent text-amber-600 font-semibold py-2 px-4 border-3 border-amber-600 rounded-full hover:bg-amber-600 hover:text-white ">
 Learn more
</button>
        </div>
    </div>
</div>
  )
}

export default About