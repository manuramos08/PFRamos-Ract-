import { useState, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CartContext } from "../Context/ShoppingCartContext";

const useCounter = ({ stock, initial, onAdd, producto, cantidadAgregada }) => {

    const [cart, setCart] = useContext(CartContext);

    const [cantidad, setCantidad] = useState(parseInt(initial));

    const sumar = () => {
            setCantidad(cantidad + 1);
    }

    const restar = () => {
            setCantidad(cantidad - 1);
    }

    const agregarAlCarrito = () => {
        const [productId, productName, productPrice] = producto;

        const newItem = {
            id: productId,
            title: productName,
            precio: productPrice,
        };

        const updatedCart = [...cart];
        for (let i = 0; i < cantidad; i++) {
            updatedCart.push(newItem);
        }
        setCart(updatedCart); 
    };

    return (
        <>
            <Card style={{ width: '16rem' }} className="cardContador text-center">
                <div>
                    {
                        <Card.Body>
                            <Card.Title className="tituloContador">{cantidad}</Card.Title>
                            <Button variant="primary" className='botonCount' onClick={sumar}>
                                <AddIcon />
                            </Button>
                            <Button variant="primary" className='botonCount' onClick={restar}>
                                <RemoveIcon />
                            </Button>
                            <div className=" text-center">
                                <Button variant="primary" className='botonCard' onClick={() => {
                                    agregarAlCarrito();
                                    onAdd(cantidad);
                                }}> Agregar al carrito</Button>
                            </div>
                        </Card.Body>
                    }

                </div>
            </Card>
        </>
    )
}

export default useCounter;



// import { useState } from "react"
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import { useContext } from "react"
// import { CartContext } from "../Context/ShoppingCartContext"

// import React from 'react'

// const useCounter = ({ stock, initial, onAdd, producto, cantidadAgregada}) => {

//     const [cart, setCart] = useContext(CartContext)

//     const [cantidad, setCantidad] = useState(parseInt(initial))

//     const sumar = () => {
//         if (cantidad < parseInt(stock)) {
//             setCantidad(cantidad + 1)
//         }
//     }

//     const restar = () => {
//         if (cantidad > parseInt(initial)) {
//             setCantidad(cantidad - 1)
//         }
//     }

//     const agregarAlCarrito = () => {
//         console.log("Adding to cart...");
//         const [productId, productName, productPrice] = producto;
//         console.log("Product Details:", productId, productName, productPrice);
    
//         const newItem = {
//             id: productId,
//             title: productName,
//             precio: productPrice,
//         };
    
//         const updatedCart = [...cart];
//         for (let i = 0; i < cantidad; i++) {
//             updatedCart.push(newItem);
//         }
    
//         console.log("Updated Cart:", updatedCart);
//         setCart(updatedCart);
//     };



//     return (
//         <>
//             <Card style={{ width: '16rem' }}
//                 className="cardContador text-center">
//                 <div>
//                     {stock > 0 ?
//                         <Card.Body>
//                             <Card.Title className="tituloContador">{cantidad}</Card.Title>
//                             <Button variant="primary" className='botonCount' onClick={sumar}>
//                                 <AddIcon />
//                             </Button>
//                             <Button variant="primary" className='botonCount' onClick={restar}>
//                                 <RemoveIcon />
//                             </Button>
//                             <div className=" text-center">
//                                 <Button variant="primary" className='botonCard' onClick={() => {
//                                     agregarAlCarrito();
//                                     onAdd(cantidad);
//                                 }}> Agregar al carrito</Button>
//                             </div>
//                         </Card.Body>
//                         :
//                         <Card.Body>
//                             <Card.Title className="tituloContador">No hay stock disponible</Card.Title>
//                         </Card.Body>
//                     }

//                 </div>
//             </Card>
//         </>

//     )
// }

// export default useCounter