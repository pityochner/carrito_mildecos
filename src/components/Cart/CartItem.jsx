import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";


const CartItem = ({ quantity, totalPrice }) => {
  const { cartItems, removeItem } = useContext(CartContext)
  return (
    <>
       {cartItems.map((item) => (
         <>
             <Card className="mb-3 mt-3 ml-3 text-center cardCart">
               <Card.Img src={item.productImage} />
               <Card.Body>
                 <Card.Title>{item.productName}</Card.Title>
                 <Card.Text>${item.price}</Card.Text>
               </Card.Body>
               <Card.Footer className="text-muted">{quantity} UNIDAD/ES</Card.Footer>
               <Card.Footer>
                <Button className="btn-dark" onClick={() => removeItem()}>
                  Eliminar Producto
                </Button>
               </Card.Footer>
             </Card>
         </>
       ))}
       <h1>{`TOTAL: $${totalPrice}`}</h1>
     </>
  );
};

export default CartItem;