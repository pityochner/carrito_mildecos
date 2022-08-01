import ItemCount from '../ItemCount/ItemCount';
import Data from "../../Data/data"
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

 const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve(Data), 500);
  });

  useEffect(() => {
    setLoading(true);
    promise.then((res) => {
      const products = res;
      if (name) {
        setItems(Data.filter((items) => items.category == name));
      } else {
        setItems(products);
      }
      setLoading(false);
    });
  }, [name]);

  return (
    <>
      <div className="mt-5">
        <ItemList items={items} />
      </div>
    </>
  );
};

export default ItemListContainer;