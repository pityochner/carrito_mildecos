import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import data from '../../Data/data';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const params = useParams();

  const promise = new Promise( (res, rej) =>{
    setTimeout( () => res(data) , 2000)
  })

  useEffect( () => {
    promise.then( (response) =>{
      const foundItem = response.find(item => item.id == params.id)
      setItem(foundItem)
    })
  }, [])
  return <ItemDetail item={item} />;
}


export default ItemDetailContainer;