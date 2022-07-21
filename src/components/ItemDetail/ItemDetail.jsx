import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ item }) => {
  return (
    <>
      <div className='detalle'>
        <h1>{item.productName}</h1>
        <img src={item.productImage} alt="" />
        <p>{item.detalle}</p>
      </div>
      <ItemCount/>
    </>
  );
};

export default ItemDetail;