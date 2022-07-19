import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a MilDecos"} />} />
        <Route path='/category/:name' element={<ItemListContainer greeting={"Bienvenidos a MilDecos"} />} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
