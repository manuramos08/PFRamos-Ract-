import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

const Item = ({ productos }) => {

    const { id } = useParams()

    const productosFiltrados = productos.filter((producto) => producto.id == id)

    return (
        <div>
            {productosFiltrados.map((p) => {
                return (
                        <Card style={{ width: '18rem' }}
                            className="cardProductos">
                            <div key={p.id}>
                                <Card.Body>
                                    <Card.Title>{p.title}</Card.Title>
                                    <Card.Text>
                                        {p.description}
                                    </Card.Text>
                                    <Card.Text>
                                        Stock:
                                        {" " + p.stock}
                                    </Card.Text>
                                    <Button variant="primary" className='botonCard'>Agregar al carrito</Button>
                                </Card.Body>
                            </div>
                        </Card>

                )
            })}
        </div>
    )
}

export default Item