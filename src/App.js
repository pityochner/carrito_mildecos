import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { useState } from 'react';
import CartProvider from './contexts/CartContext';
import Cart from './components/Cart/Cart'

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a MilDecos"} />} />
          <Route path='/productos/' element={<ItemListContainer greeting={"Bienvenidos a MilDecos"} />} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='/category/:name' element={<ItemListContainer/>} />
          <Route path='/cart/' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
