import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dishes from './pages/Dishes'
import Menu from './pages/Menu'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart'
import Review from './pages/Review'
import About from './pages/About'



function App() {
  const[Dish,setDish]=useState([
{
"title": "Spicy Chicken Wings",
"image": "/src/assets/img1.jpg",
"price": 10.99,
"rating": 5,
"category": "Spicy"
},
{
"title": "Tasty Beef Burger",
"image": "/src/assets/img2.jpg",
"price": 12.99,
"rating": 5,
"category": "Tasty"
},
{
"title": "Delicious Pasta",
"image": "/src/assets/img3.jpg",
"price": 10.99,
"rating": 5,
"category": "Delicious"
},
{
"title": "Crispy Fried Chicken",
"image": "/src/assets/img4.jpg",
"price": 11.99,
"rating": 5,
"category": "Crispy"
},
{
"title": "Spicy Paneer Wrap",
"image": "/src/assets/img5.jpg",
"price": 10.99,
"rating": 5,
"category": "Spicy"
},
{
"title": "Delicious Veg Curry",
"image": "/src/assets/img6.jpg",
"price": 12.99,
"rating": 5,
"category": "Delicious"
}
]
  )
  return (
    <BrowserRouter>
    <ToastContainer position='bottom-left' autoClose={2000}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Review' element={<Review/>}/>

      <Route path='/Menu' element={<Menu dish={Dish}/>}/>
      <Route path='/Cart' element={<Cart></Cart>}></Route>

    </Routes>

    </BrowserRouter>
  )
}

export default App
