import React from 'react'
import Element from '../componenets/ELement'

function Dishes({dish}) {
  return (
    <div className='h-auto'>
    <div className='flex justify-center'>
        <div className='font-bold text-4xl font-sans pl-30 pt-15'>Our Dishes</div>
        </div>
        <div className='grid grid-cols-4 p-10'>
          {dish.map((dishes)=> <Element dishe={dishes}/>)}
          </div>
        </div>

  )
}

export default Dishes