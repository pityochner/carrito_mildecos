import './ItemDetail.css'
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react';

const ItemDetail = ({ item, setAmountItems }) => {
  const [amount, setAmount] = useState(0);
  const onAdd = (amount) => {
    setAmount(amount);
    setAmountItems((prevState) => prevState + 1);
  }
  return (
    <>
      <div className='detalle'>
        <h1>{item.productName}</h1>
        <img src={item.productImage}/>
        <p>{item.detalle}</p>
        {amount == 0 ? (
        <ItemCount items={item} initial={0} onAdd={onAdd} />
          ) : (
         <h1>¡{amount} VENECITAS AGREGADAS AL CARRITO!</h1>
          )}
      </div>
      <div className="d-flex justify-content-center mt-2 mb-2">
        <Link to='/cart/'>
          <button className="btn btn-dark">Ir a comprar</button>
        </Link>
      </div>
    </>
  );
};

export default ItemDetail;