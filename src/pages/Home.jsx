import React from 'react'
import Header from '../componenets/Header'
import Hero from '../assets/hero.jpg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className=''>
      <Header />
      
      <div
        className="  bg-cover bg-center flex items-center  px-35 py-12 min-h-[480px] max-w-full"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className=" max-w-xl text-white">
          <h1 className="text-5xl font-bold mb-6">
            Elevate Your Inner Foodie with Every Bite.
          </h1>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto quisquam delectus minima perferendis nulla quia nisi laborum.
          </p>
          <Link to="/Menu">
            <button className="h-10 px-7 bg-transparent text-amber-600 font-semibold border-2 border-amber-600 rounded-full hover:bg-amber-600 hover:text-white transition">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
