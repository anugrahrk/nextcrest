import React, { useEffect, useState } from 'react'
import CartElement from '../componenets/CartElement'
import { useRecoilState } from 'recoil'
import { totalAtom } from '../atom/atom'
import Cartimg from "../assets/cart.png"
import { Link } from 'react-router-dom'



function Cart() {
  const [cart,setCart]=useState(()=>JSON.parse(localStorage.getItem('dish'))||[]
)
  const [total,setTotal]=useState(0)
  const[totalR,setTotalR]=useRecoilState(totalAtom)
  const removeElement=(dishtoremove)=>{
  const newcart=cart.filter(item=>item.title!==dishtoremove.title)
  localStorage.setItem('dish',JSON.stringify(newcart))
  setCart(newcart)
}
  useEffect(()=>{
  let totalin=0
    for (let i=0;i<cart.length;i++){
    totalin=totalin+parseFloat(cart[i].price)
  }
  setTotal(totalin)
},[cart])


  return (
    <div>
      <div className='pt-6 text-center font-sans font-bold text-4xl text-slate-700 text-shadow-2xs text-shadow-gray-600'>Your Cart</div>
      {cart.length!==0 &&
      <div className='pt-10 pb-5 pr-40 pl-40'>{cart.map((item,index)=><CartElement key={index} dish={item} Remove={()=>removeElement(item)}></CartElement>)}
     <div className='flex justify-end  p-10'> <div className='pr-7  text-slate-700 font-semibold text-4xl'>Total:    $ {totalR<=0?total:(total+totalR).toFixed(2)}</div>
      <button onClick={()=>{
        alert("Purchase Successfull")
        localStorage.removeItem('dish')
        setCart("")
      }} className='w-20 h-10 bg-green-400 text-white border  shadow-gray-700 shadow-xs border-white rounded-xl hover:bg-green-800 hover:shadow-lg cursor-pointer'>Pay</button>
      </div></div>
      }
      {cart.length==0 &&
      <div className='fixed bottom-40 right-140'>
        <img src={Cartimg} loading='lazy' className='h-50 w-70' alt="" />
        <div className='pl-15 pt-5 pb-5 text-lg font-sans font-semibold text-slate-600 '>Your cart is empty. 😔</div>
        <div className='pl-16'>
        <button className=' w-40 h-10 bg-blue-400 text-white   shadow-gray-700 shadow-xs  rounded-xl hover:bg-blue-800 hover:shadow-lg cursor-pointer'><Link to="/Menu">Continue Shoping</Link></button></div>
        </div>
        
      }
    </div>
  )
}

export default Cart