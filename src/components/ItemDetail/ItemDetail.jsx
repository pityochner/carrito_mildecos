import './ItemDetail.css'

const ItemDetail = ({ item }) => {
  return (
    <>
      <div className='detalle'>
        <h1>{item.productName}</h1>
        <img src={item.productImage} alt="" />
        <p>{item.detalle}</p>
      </div>
    </>
  );
};

export default ItemDetail;