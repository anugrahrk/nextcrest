import React from 'react'

function Element({dishe}) {
  return (
    <div className=''>
    <div className=' p-5 grid grid-cols-3 gap-3'>
        <div className='border-lg  rounded-lg border-slate-500 shadow-2xl p-5 w-auto'>
        <img className='rounded-lg w-80 h-50' src={dishe.image} alt="" />
            <div className='pl-30 font-semibold text-2xl font-sans  pt-5'>{dishe.title}</div>
            <div className='pl-30 flex text-lg text-slate-700 pt-3 pb-2'><svg class="w-6 h-6 text-yellow-300 pt-1 pr-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg> {dishe.rating}/5</div>
            <div className='flex '>
            <div className='pl-30 font-semibold text-2xl font-sans  pt-5 pr-5'>{dishe.price}</div>
            <div className='flex pt-3'><button class="bg-transparent text-amber-600 font-semibold py-2 px-4 border-3 border-amber-600 rounded-full hover:bg-amber-600 hover:text-white ">
 Buy Now
</button>
</div>
</div>
</div>
        </div>
        </div>
  )
}

export default Element