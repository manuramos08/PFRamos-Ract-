import React from 'react'
import { useContext } from "react"
import { CartContext } from "../Context/ShoppingCartContext"
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Cart = () => {

    const [cart, setCart] = useContext(CartContext);

    const contadorItems = cart.reduce((item, producto) => {
        const todosItems = item.find(item => item.id === producto.id);
        if (todosItems) {
            todosItems.count++;
        } else {
            item.push({ ...producto, count: 1 });
        }
        return item;
    }, []);

    const precioTotal = contadorItems.reduce((total, producto) => total + producto.precio * producto.count, 0);

    return (
        <div className="divTablaCarrito">
            {contadorItems.length === 0 ?
                <>
                    <h1 className="h1Carrito">Tu carrito esta vacio.</h1>
                    <div className='divVolver'>
                        <Link to={`/`}>
                            <Button className='botonVolver' size="lg">Volver al catálogo</Button>
                        </Link>
                    </div>
                </>
                :
                <>
                    <table className="tablaCarrito">
                        <thead>
                            <tr>
                                <th className="thCarrito">Title</th>
                                <th className="thCarrito">Cantidad</th>
                                <th className="thCarrito">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contadorItems.map((producto) => (
                                <tr key={producto.id}>
                                    <td className="tdCarrito">{producto.title}</td>
                                    <td className="tdCarrito">{producto.count}</td>
                                    <td className="tdCarrito">{"$ " + (producto.precio * producto.count)}</td>
                                    <td className="tdCarrito">
                                        <button
                                            className="btnEliminar"
                                            onClick={() => {
                                                const updatedCart = cart.filter(item => item.id !== producto.id);
                                                setCart(updatedCart);
                                            }}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot className='tFoot'>
                            <tr className='trFoot'>
                                <td className="tdTotal">Total</td>
                                <td className="tdCarrito"></td>
                                <td className="tdTotal">{"$ " + precioTotal}</td>
                                <td className="tdCarrito">
                                    <button
                                        className="btnVaciar"
                                        onClick={() => setCart([])}>
                                        Vaciar <br /> carrito
                                    </button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className='divFinalizar'>
                        <Link to={`/checkout`}>
                            <Button className='botonFinalizar'>Finalizar compra</Button>
                        </Link>
                    </div>
                </>
            }
        </div>

    );
};

export default Cart;

