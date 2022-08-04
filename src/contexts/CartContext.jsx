import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item, quantity) => {
    setCartItems([...cartItems, {item, quantity}])
    const newItem = isInCart(item);
    if (newItem){
        quantity = quantity + newItem.quantity
        setCartItems(cartItems.splice(cartItems.findIndex ( element => element.item.id === item.id) , 1));
    }
  }

  const isInCart = (item) => {
    return cartItems.find(element=>element.item === item)
  }

  const clear = () => {
    setCartItems([]);
  }

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter(element=>element.item.id !== itemId))
  }

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addItem, clear, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;