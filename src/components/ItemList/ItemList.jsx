import Button from 'react-bootstrap/Button';
import { Card, Row, Col, Container, Carousel } from "react-bootstrap";
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
            
                <Carousel className='mb-5'>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://d2r9epyceweg5n.cloudfront.net/stores/002/137/496/themes/amazonas/1-slide-1650889396551-4759958275-f99445ead4251f44a77373910cf389ee1650889396-1920-1920.webp?1093475898"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://d2r9epyceweg5n.cloudfront.net/stores/002/137/496/themes/amazonas/1-slide-1650818409647-7612071924-57f1da2e607183677ddb8894f3e123ad1650818417-1920-1920.webp?1093475898"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://d2r9epyceweg5n.cloudfront.net/stores/002/137/496/themes/amazonas/1-slide-1650773337159-7636714517-78267d2320844082b7562807e48398a61650773347-1920-1920.webp?1093475898"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

                <Container className="itemContainer">
                    <Row>
                        {props.items.map((items, k) => (
                            <Col key={k} xs={6} md={4} lg={3}>
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