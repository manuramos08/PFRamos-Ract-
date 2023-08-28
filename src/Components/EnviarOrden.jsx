import { collection, addDoc, getFirestore } from "firebase/firestore"
import { useState } from "react"

const EnviarOrden = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [idOrden, setIdOrden] = useState(null)
    const [formulario, setFormulario] = useState(true)

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
        


    return (
        <>
            {
                formulario ?
                    <div>
                        <h1>Finalizar pedido</h1>
                        <form onSubmit={handleSubmit}>
                            <input placeholder="Nombre y Apellido"
                                onChange={(e) => setNombre(e.target.value)}
                            />
                            <input placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type="submit" >Enviar información</button>
                        </form>
                    </div>
                    :
                    <p>Número de orden: {idOrden}</p>
            }
        </>
    )
}

export default EnviarOrden

      // <div>
        //     <h1>Finalizar pedido</h1>
        //     <form onSubmit={handleSubmit}>
        //         <input placeholder="Nombre y Apellido"
        //             onChange={(e) => setNombre(e.target.value)}
        //         />
        //         <input placeholder="Email"
        //             onChange={(e) => setEmail(e.target.value)}
        //         />
        //         <button type="submit">Enviar información</button>
        //     </form>
        //     <p>Número de orde: {idOrden}</p>
        // </div>