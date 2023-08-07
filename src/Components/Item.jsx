import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Item = ({ title, description, category, id }) => {
    return (
        <>
            <Card style={{ width: '18rem' }}
                text={"warning"}
                bg={"primary"}
                className='cardProductos'>

                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to={`/item/${id}`}>
                        <Button className='botonCard'>Detalles</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item