import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dishes from './pages/Dishes'


function App() {
  const[Dish,setDish]=useState([
  {
    "title": "Tasty Dish",
    "image": "/src/assets/img1.jpg",
    "price": "$10.99",
    "rating": 5
  },
  {
    "title": "Tasty Dish",
    "image": "/src/assets/img2.jpg",
    "price": "$12.99",
    "rating": 5
  },
  {
    "title": "Tasty Dish",
    "image": "/src/assets/img3.jpg",
    "price": "$10.99",
    "rating": 5
  },
  {
    "title": "Tasty Dish",
    "image": "/src/assets/img4.jpg",
    "price": "$11.99",
    "rating": 5
  },
  {
    "title": "Tasty Dish",
    "image": "/src/assets/img5.jpg",
    "price": "$10.99",
    "rating": 5
  },
  {
    "title": "Tasty Dish",
    "image": "/src/assets/img6.jpg",
    "price": "$12.99",
    "rating": 5
  }
])
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Dishes' element={<Dishes dish={Dish}/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
