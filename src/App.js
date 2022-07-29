import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { useState } from 'react';

function App() {
  const [amountItems, setAmountItems] = useState(0);
  return (
    <>
    <BrowserRouter>
    <NavBar amountItems={amountItems}/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a MilDecos"} />} />
        <Route path='/productos/' element={<ItemListContainer greeting={"Bienvenidos a MilDecos"} />} />
        <Route path='/item/:id' element={<ItemDetailContainer setAmountItems={setAmountItems}/>} />
        <Route path='/category/:name' element={<ItemListContainer/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
