import React from 'react'
import Element from '../componenets/ELement'

function Dishes({dish}) {
  return (
    <div>
    <div className='flex justify-center'>
        <div className='font-bold text-4xl font-sans pl-30 pt-15'>Our Dishes</div>
        </div>
        {dish.map((dishes)=> <Element dishe={dishes}/>)}</div>

  )
}

export default Dishes