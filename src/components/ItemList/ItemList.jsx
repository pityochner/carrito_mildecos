import Button from 'react-bootstrap/Button';
import { Card, Row, Col, Container } from "react-bootstrap";
import {Link} from 'react-router-dom'
import './ItemList.css'

function ItemList(props) {
    return (
        <>
            <div id="productos">
                <h1 className="text-center p-3">PRODUCTOS</h1>
                <div className="d-flex justify-content-center mt-2 mb-2">
                    <Link className='linkButtom buttonLink' to='/productos/'>
                        <button className="btn">TODOS</button>
                    </Link>
                    <Link className='linkButtom buttonLink' to='/category/damero'>
                        <button className="btn">DAMERO</button>
                    </Link>
                    <Link className='linkButtom buttonLink' to='/category/escalonado'>
                        <button className="btn">ESCALONADO</button>
                    </Link>
                    <Link className='linkButtom buttonLink' to='/category/vintage'>
                        <button className="btn">VINTAGE</button>
                    </Link>
                </div>    
                <Container className="itemContainer">
                    <Row>
                        {props.items.map((items, k) => (
                            <Col key={k} xs={12} md={4} lg={4}>
                                <Card className="mb-3 text-center card">
                                    <Card.Img src={items.productImage} />
                                    <Card.Body>
                                        <Card.Title>{items.productName}</Card.Title>
                                        <Card.Text>${items.price}</Card.Text>
                                        <Link to={`/item/${items.id}`}>
                                        <Button className="btn-bg btn-secondary text-light">Ver más</Button>
                                        </Link>
                                        <br></br>
                                        <Button className="btn-dark mt-3">Agregar al carrito</Button>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">Stock: {items.stock}</Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>)}

export default ItemList;