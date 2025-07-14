import React, { useState } from 'react'
import Header from '../componenets/Header'
import ReviewContainer from '../componenets/ReviewContainer'


function Review() {
    const [review,setReview]=useState([{
        "title":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "img":"/src/assets/pic1.png",
        "user":"Sophia Azura"
    },{
        "title":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "img":"/src/assets/pic2.png",
        "user":"John Deo"
    },{
        "title":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "img":"/src/assets/pic3.png",
        "user":"Victoria Zoe"
    }])
  return (
    <div>      
    <Header/>
    <div className='pt-10 text-center text-3xl font-bold text-slate-800 pb-7'>Customers Review's</div>
    <div className='grid grid-cols-3 gap-1'>{review.map(item=><ReviewContainer Review={item} />)}</div>
</div>
  )
}

export default Review