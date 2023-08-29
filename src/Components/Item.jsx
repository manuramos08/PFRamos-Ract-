import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Item = ({ title, description, id, img }) => {



    return (
        <div > 
            <Card style={{ width: '18rem' }}
                text={"warning"}
                bg={"primary"}
                className='cardProductos'>
                <Card.Body className='cardBodyProductos'> 
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={img} className='imgCard'/>
                    <Card.Text className='textCard'>
                        {description}
                    </Card.Text>
                    <Link to={`/item/${id}`}>
                        <Button className='botonCard'>Detalles</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item