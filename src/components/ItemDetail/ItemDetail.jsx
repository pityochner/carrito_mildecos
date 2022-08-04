import './ItemDetail.css'
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';
import { Card } from "react-bootstrap";


const ItemDetail = ({ item, setAmountItem }) => {
  const { setCartItems } = useContext(CartContext);
  const [amount, setAmount] = useState(0);
  const onAdd = (amount) => {
    setAmount(amount);
    setCartItems((prevState) => [...prevState, item]);
  }
  return (
    <>
      <div className='detalle'>
        <h1>{item.productName}</h1>
        <img src={item.productImage}/>
        <Card.Footer className="mt-3 mb-5">
          {item.detalle}
        </Card.Footer>
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