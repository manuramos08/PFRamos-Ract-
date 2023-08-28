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

    const totalPrice = contadorItems.reduce((total, producto) => total + producto.precio * producto.count, 0);

    return (
        <div className="carrito">
            {contadorItems.length === 0 ?
                <>
                    <h2 className="pCarrito">Tu carrito esta vacio</h2>
                    <Link to={`/`}>
                        <Button className='botonCard'>Volver al catálogo</Button>
                    </Link>
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
                                            className="btnDelete"
                                            onClick={() => {
                                                const updatedCart = cart.filter(item => item.id !== producto.id);
                                                setCart(updatedCart);
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className="tdCarrito">Total</td>
                                <td className="tdCarrito">{"$ " + totalPrice}</td>
                                <td className="tdCarrito">
                                    <button
                                        className="btnClear"
                                        onClick={() => setCart([])}
                                    >
                                        Clear Cart
                                    </button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <Link to={`/checkout`}>
                        <Button className='botonCard'>Checkout</Button>
                    </Link>
                </>
            }
        </div>

    );
};

export default Cart;

