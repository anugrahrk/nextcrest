import React from 'react'
import Header from '../componenets/Header'
import Hero from '../assets/hero.jpg'


function Home() {
  return (
    <div>
  <Header/> <div className='realtive'><div className='absolute top-1/2 left-150 transform -translate-x-1/2 -translate-y-1/2 z-10'> 
  <div className='text-gray-400 font-bold text-6xl'>Elevate Your Inner Foodie with Every Bite.</div>
  <div className='text-gray-400 font-medium text-md pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto quisquam delectus minima perferendis nulla quia nisi laborum.</div>
  <div className='pl-45 pt-5'>
  <button class="h-9 w-35 bg-transparent text-amber-600 font-semibold px-4 border-3 border-amber-600 rounded-full hover:bg-amber-600 hover:text-white ">Order Now</button>
  </div>
</div>
</div>
  <div  className='pt-4 pb-30 absolute'><img className='w-auto' src={Hero}  />
</div>
</div>
  )
}

export default Home