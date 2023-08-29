import { collection, addDoc, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { useContext } from "react"
import { CartContext } from "../Context/ShoppingCartContext"
import { Button } from 'react-bootstrap';


const EnviarOrden = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [idOrden, setIdOrden] = useState(null)
    const [formulario, setFormulario] = useState(true)
    const [cart, setCart] = useContext(CartContext);

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(orderCollection, order).then(({ id }) =>
            setIdOrden(id))
        addDoc(orderCollection, order)
            .then(({ id }) => {
                setIdOrden(id);
                setFormulario(false);
            });
    }

    const order = {
        nombre,
        email
    }
    const orderCollection = collection(db, "orden")


    

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

    console.log(precioTotal)

    return (
        <>
            {
                formulario ?
                    <div className="divFormFinalizar">
                        <h1 className="h1Finalizar">Finalizar pedido</h1>
                        <form className="formFinalizar" onSubmit={handleSubmit}>
                            <input placeholder="Nombre y Apellido" className="input"
                                onChange={(e) => setNombre(e.target.value)}
                            />
                            <input placeholder="Email" className="input"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <p className="pTotalFinalizar">Total de la compra:  <span className="spanFinalizar"> ${precioTotal} </span> </p>
                            <Button type="submit" className="btnEnviar"
                                onClick={() => setCart([])}>Enviar información</Button>
                        </form>
                    </div>
                    :
                    <div>
                        <h1 className="nroOrden">Número de orden: <span className="spanNroOrden">{idOrden}</span></h1>
                        <h3 className="nroOrden">Gracias por su compra, vuelva pronto.</h3>
                    </div>
            }
        </>
    )
}

export default EnviarOrden