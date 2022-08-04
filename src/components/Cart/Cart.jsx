import React, { useContext, useState, useEffect } from "react";
import { Button } from 'react-bootstrap'
import { CartContext } from '../../contexts/CartContext';
import CartItem from "./CartItem";
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems, removeItem, clear } = useContext(CartContext);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseInt(item.price);
    });
    setTotalPrice(total);
  }, [cartItems]);



  return (
    <>
      {cartItems.length === 0 ? (
        <>
            <div className="mt-3 d-flex justify-content-center">
              NO HAY NINGÚN PRODUCTO EN SU CARRITO !!!
              <Link to="/">
                <Button className="btn-dark ms-3">
                  Volver
                </Button>
              </Link>
            </div>
        </>
    ) : (
        <>
          <CartItem removeItem={removeItem} totalPrice={totalPrice}/>
          <Button className="mt-5 btn-dark d-flex justify-content-end" onClick={() => clear()}>
            VACIAR CARRITO
          </Button>
        </>
    )}
</>
  );
};

export default Cart;