import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {collection, getDocs, getFirestore} from "firebase/firestore"


const ItemListContainer = () => {

    const { category } = useParams()

    const [productos, setProductos] = useState([])

    useEffect (()=> {
        const db = getFirestore()

        const itemsCollection = collection (db, "Productos-piletas")
        getDocs(itemsCollection).then((snapshot)=>{
            const docs = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            setProductos(docs)
        })
    }, [])

    
    const filtrarProductos = productos.filter((producto) => producto.category === category)

    console.log(productos)
    
    return (
        <div>

            {category ? <ItemList productos={filtrarProductos} /> : <ItemList productos={productos} />}
        </div>
    )
}

export default ItemListContainer

// const traerProductos = new Promise((resolve, reject) => {
//     if (productos.length > 0) {
//         setTimeout(() => {
//             resolve(productos);
//         }, 2000);
//     } else {
//         reject(new Error("No hay datos disponibles"));
//     }
// })

// traerProductos
//     .then((res) => {
//     })
//     .catch((error) => {
//         console.log(error);
//     });