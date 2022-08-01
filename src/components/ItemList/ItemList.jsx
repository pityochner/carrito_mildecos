import Button from 'react-bootstrap/Button';
import { Card, Row, Col, Container } from "react-bootstrap";
import {Link} from 'react-router-dom'
import './ItemList.css'

function ItemList(props) {
    return (
        <>
            <div id="productos">
                <h1 className="text-center mb-3">PRODUCTOS</h1>
                <div className="d-flex justify-content-center mt-2 mb-2 flex-wrap">
                    <Link  to='/productos/'>
                        <button className='buttonLink'>TODOS</button>
                    </Link>
                    <Link to='/category/damero'>
                        <button className='buttonLink'>DAMERO</button>
                    </Link>
                    <Link to='/category/escalonado'>
                        <button className='buttonLink'>ESCALONADO</button>
                    </Link>
                    <Link to='/category/metalizado'>
                        <button className='buttonLink'>METALIZADO</button>
                    </Link>
                    <Link to='/category/marmolado'>
                        <button className='buttonLink'>MARMOLADO</button>
                    </Link>
                    <Link to='/category/vintage'>
                        <button className='buttonLink'>VINTAGE</button>
                    </Link>
                </div>    
                <Container className="itemContainer">
                    <Row>
                        {props.items.map((items, k) => (
                            <Col key={k} xs={12} md={4} lg={3}>
                                <Card className="mb-3 text-center card">
                                    <Card.Img src={items.productImage} />
                                    <Card.Body>
                                        <Card.Title>{items.productName}</Card.Title>
                                        <Card.Text>${items.price}</Card.Text>
                                        <Link to={`/item/${items.id}`}>
                                        <Button className="btn arbol">COMPRAR</Button>
                                        </Link>
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