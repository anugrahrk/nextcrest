import React, { useState } from 'react'
import Element from '../componenets/Element'
import Header from '../componenets/Header'
import { useLocation } from 'react-router-dom'


function Menu({dish}) {
  const location=useLocation()
  const queryParmas=new URLSearchParams(location.search)
  const category=queryParmas.get('category')

  return (
    <div>
      <Header/>

    <div className='flex justify-center'>
        <div className='font-bold text-4xl font-sans pl-30 pt-15 pb-10'>Our Dishes</div>
        </div>
        <div className='grid grid-cols-4'>
          { dish.filter((dishes)=>!category||dishes.category==category).map((dishes)=> <Element dishe={dishes}/>)}

          </div>
        </div>
  )
}

export default Menu