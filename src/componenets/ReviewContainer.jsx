import React from 'react'

function ReviewContainer({Review}) {
  return (
    <div className='p-5'>
    <div className='max-w-140 max-h-100 shadow-md shadow-slate-400 rounded-xl border border-slate-200 p-4 font-light font-sans text-sm text-slate-600'><div>{Review.title}</div>
    <div className='flex pt-5 justify-center'><img  className='rounded-full w-20 h-20' src={Review.img} alt="" /><div className='font-semibold text-xl text-gray-900 p-5 '>{Review.user}</div></div>
    </div>
    </div>
  )
}

export default ReviewContainer