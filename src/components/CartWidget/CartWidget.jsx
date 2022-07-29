import cartIcon from "../../assets/cart.svg"

const CartWidget = ({amountItems}) => {
  return (
    <>
      <div className="wrapper me-2 mt-1 cart">
        <a className="text-decoration-none" href="#">
        <img style={{ width: 30 }} src={cartIcon} />
        <span className="ps-2 text-dark">{amountItems}</span>
        </a>
      </div>
    </>
  );
};

export default CartWidget;