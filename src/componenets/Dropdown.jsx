// import React from 'react'

// function Dropdown() {
//   return (
//     <div className='font-semibold text-xl font-sans text-slate-700 pt-4 pr-5'>
//        <select defaultValue="default" className='border rounded-md'>
//         <option value="default" disabled hidden >Menu</option>
//          <option className=''>Spicy</option>

//          <option>Tasty</option>

//          <option >Delicious</option>
//          <option >Cripsy</option>

//        </select>

// </div>
//   )
// }

// export default Dropdown

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Dropdown() {
  const[open,setOpen]=useState(false)
  const[menu,setMenu]=useState("Menu")
  const Item=['Spicy','Delicious','Crispy','Tasty']
  const navigate=useNavigate()

  return (
    <div>
      <div className='relative pt-4 pr-5'>
        <button onClick={()=>setOpen(!open)} className='flex cursor-pointer'>
          <p className='font-semibold text-xl font-sans text-slate-700 '>Dishes</p>
          <div className='pt-2 pl-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" className="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
</div>
        </button>
      </div>
      {open && 
      <div className='absolute border border-slate-300 shadow-lg rounded-md p-4 bg-white'     >
        <ul>
      {Item.map((item)=> <li className='p-0.5 font-semibold text-lg font-sans text-slate-700 cursor-pointer' onClick={()=>{
        setOpen(false)

        navigate(`/Menu?category=${item}`)
      }
      }
        >{item}</li>)}
        </ul>
      </div>

        }
    </div>
  )
}

export default Dropdown