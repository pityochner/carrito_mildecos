import ItemCount from '../ItemCount/ItemCount';
import Data from "../../Data/data"
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

function ItemListContainer(props) {

  //Guardar datos en un estado 
  const [items, setItems] = useState([]);

  //Crear promesa que retorne los datos

  useEffect(() => {
    let promiseItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Data);
        reject("Ha ocurrido un error");
      }, 2000);
    })

    promiseItems.then(
      (respuesta) => {
        setItems(Data);
      }
    ).catch((error) => {
      console.error(error);
    })
  },
    []
  )

  const onAddItem = (count) => {
    alert(`${count} items van a ser añadidos al carrito!`);
  }

  return (
    <>
      <div className='container'>
        <ItemList items={items} />
        <ItemCount stock={99} initial={0} onAdd={onAddItem} />
      </div>
    </>)
};
export default ItemListContainer;
