import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <>
      <div className="wrapper me-2 mt-1 cart">
        <FontAwesomeIcon className="mt-2" icon={faShoppingCart} />
        <span className="ps-2 text-dark">{cartItems.length}</span>
      </div>
    </>
  );
};

export default CartWidget;