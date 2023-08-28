import React from 'react'
import ItemListContainer from "./Components/ItemListContainer"
import NavBar from "./Components/NavBar"
import ItemDetailContainer from './Components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart'
import ShoppingCartProvider from './Context/ShoppingCartContext'
import EnviarOrden from './Components/EnviarOrden'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ShoppingCartProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/category/:category" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/checkout" element={<EnviarOrden />} />
        </Routes>
      </ShoppingCartProvider>
    </BrowserRouter>
  )
}

export default App
