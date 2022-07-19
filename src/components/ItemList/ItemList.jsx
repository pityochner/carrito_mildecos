import Button from 'react-bootstrap/Button';
import { Card, Row, Col, Container } from "react-bootstrap";
import {Link} from 'react-router-dom'

function ItemList(props) {
    return (
        <>
            <div id="productos">
                <h1 className="text-center p-3">Productos</h1>
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
                                        <Button className="btn-bg btn-light text-dark">Ver más</Button>
                                        </Link>
                                        <br></br>
                                        <Button className="btn-dark mt-3">Agregar al carrito</Button>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">Stock {items.stock}</Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>)}

export default ItemList;