import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { totalAtom } from '../atom/atom'

function CartElement({dish,Remove}) {
  const [price,setPrice]=useState(dish.price)
  const[total,setTotal]=useRecoilState(totalAtom)
  const [count,setCount]=useState(1)
  const [loaded, setLoaded] = useState(false)
  
  return (
    <div className='shadow-lg p-4 rounded-xl p'><div className='flex justify-between'>
        <div className='flex space-x-2 pl-5'>
          {!loaded && (
            <div className="w-full h-full bg-gray-300 animate-pulse absolute top-0 left-0 z-0" />
          )}
          <img src={dish.image}  loading='lazy' onLoad={()=>setLoaded(true)} alt="" className='h-20 w-20 rounded-lg shadow-lg '/>
        <div className='font-sans font-semibold text-xl text-slate-900 text-shadow-md pl-3 pt-4'>{dish.title}</div>
        </div>
        <div className='flex justify-around space-x-5 pt-4 '>
        <button className='rounded-full border border-slate-600 w-7 h-7 hover:bg-slate-300' onClick={()=>{
          setPrice((price+dish.price))
          setTotal((total+dish.price))
          let countN=count+1
          setCount(countN)
        }}>+</button>
        <button className='rounded-full border border-slate-600 w-7 h-7 hover:bg-slate-300'
        onClick={()=>{
          setPrice((price>dish.price?(price-dish.price):dish.price))
          setTotal((total-dish.price))
          let countN=count-1
          setCount(count>1?countN:1)

        }}>-</button>
        <div className='text-shadow-md font-medium text-gray-700'>x {count}</div>
        <button className='hover:text-red-600 cursor-pointer pb-10' onClick={Remove}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
</button>
        <div className='font-sans font-bold text-2xl text-slate-700 text-shadow-md pl-10 pr-5'>${dish.price}</div> </div>
        </div></div>
  )
}

export default CartElement