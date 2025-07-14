import React, { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilState } from 'recoil';
import { cartValueState } from '../atom/atom';

function Element({ dishe }) {
  const [loaded, setLoaded] = useState(false)
  const [cart,setCart]=useRecoilState(cartValueState)

  return (
    <div className="p-5">
      <div className="border-lg rounded-lg border-slate-500 shadow-2xl p-5 w-80">
        <div className="relative w-full h-52 bg-gray-300 rounded-lg overflow-hidden">
          {!loaded && (
            <div className="w-full h-full bg-gray-300 animate-pulse absolute top-0 left-0 z-0" />
          )}
          <img
            className={`rounded-lg w-full h-full object-cover transition-opacity duration-500 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            src={dishe.image}
            alt=""
            onLoad={() => setLoaded(true)}
            loading="lazy"
          />
        </div>

        <div className="pl-5 font-semibold text-2xl font-sans pt-5">{dishe.title}</div>

        <div className="pl-6 flex text-lg text-slate-700 pt-3 pb-5">
          <svg
            className="w-6 h-6 text-yellow-300 pt-1 pr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          {dishe.rating}/5
        </div>

        <div className="flex items-center justify-between">
          <div className="pl-5 font-semibold text-2xl font-sans">{dishe.price}</div>
          <button className="bg-transparent text-amber-600 font-semibold py-2 px-4 border-2 border-amber-600 rounded-full hover:bg-amber-600 hover:text-white transition" onClick={()=>{
              const existing=JSON.parse(localStorage.getItem("dish")||"[]")
              const alreadyexist=existing.filter((dish)=>dish.title===dishe.title)
            if(alreadyexist.length==0){
                existing.push(dishe)
                localStorage.setItem('dish',JSON.stringify(existing))
                toast.success("Item Added Successfully")
                setCart(existing.length)
                localStorage.setItem('cart',existing.length)

            }
            else{
            toast.error("Item Already in Cart")

            }
          }}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Element
