import React from 'react'
import ItemListContainer from "./Components/ItemListContainer"
import NavBar from "./Components/NavBar"
import ItemDetailContainer from './Components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart'


function App() {


  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/category/:category" element={<ItemListContainer />}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
