import { useEffect, useState } from 'react'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore"


const ItemDetail = ({ pileta }) => {

    const [cantidadAgregada, setCantidadAgregada] = useState(0)

    const manejoOnAdd = (cantidad) => {
        setCantidadAgregada(cantidad);
    }

    const { id } = useParams();

    const [producto, setProducto] = useState([])

    useEffect(() => {
        const db = getFirestore();

        const oneItem = doc(db, "Productos-piletas", `${id}`);
        getDoc(oneItem).then((snapshot) => {
            if (snapshot.exists()) {
                const docs = snapshot.data()
                setProducto(docs)
            }
        });
    }, []);

    const productosFiltrados = pileta.filter((producto) => producto.id == id)

return (
    <div >
        {productosFiltrados.map((p) => {
            return (
                <Card style={{ width: '18rem' }}
                    className="cardProductos"
                    key={p.id}>
                    <div >
                        <Card.Body>
                            <Card.Title>{p.title}</Card.Title>
                            <Card.Text>
                                {p.description}
                            </Card.Text>
                            <Card.Text className="pPrecio">
                                $
                                {" " + p.precio}
                            </Card.Text>
                            {
                                cantidadAgregada > 0 ?
                                    (<div className='text-center'>
                                        <Button variant="primary" className="botonTerminar">
                                            <Link to={"/cart"} className="botonTerminar">
                                                Terminar compra
                                            </Link>
                                        </Button>
                                    </div>)
                                    :
                                    (<ItemCount stock={p.stock} initial={1} onAdd={manejoOnAdd}
                                        producto={[p.id, p.title, p.precio]} cantidadAgregada={cantidadAgregada} />)
                            }
                        </Card.Body>
                    </div>
                </Card>
            )
        })}
    </div>
)
}

export default React.memo(ItemDetail)