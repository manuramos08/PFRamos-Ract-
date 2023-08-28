import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {collection, getDocs, getFirestore} from "firebase/firestore"


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])

    useEffect (()=> {
        const db = getFirestore()

        const itemsCollection = collection (db, "Productos-piletas")
        getDocs(itemsCollection).then((snapshot)=>{
            const docs = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            setProducto(docs)
        })
    }, [])

    console.log(producto)
    


    return (
        <div>
            <ItemDetail pileta={producto} />
        </div>
    )
}

export default ItemDetailContainer


    // const productos = [
    //     { id: 1, title: "Alguicida Mantenimiento Clorotec", description: "Previene la formación de algas, protege la desinfección del cloro y mantiene la transparencia deseada", stock: 0, category: "alguicidas", precio: 1500 },
    //     { id: 2, title: "Alguicida Choque Clorotec", description: "Elimina la mayoría de las algas, protege la desinfección del cloro y mantiene la transparencia deseada", stock: 2, category: "alguicidas", precio: 2000 },
    //     { id: 3, title: "Clarificador Clorotec", description: "Decanta las impurezas del agua y protege la desinfección del cloro", stock: 4, category: "clarificadores", precio: 700 },
    //     { id: 4, title: "Cloro en pastillas Triple Acción", description: "Para todo tipo de Piletas. Su uso es siempre dentro de una boya o skimmer. ", stock: 15, category: "cloropastillas", precio: 1700 },
    //     { id: 5, title: "Cloro granulado Disolución Lenta", description: "Ideal para piscinas revestidas", stock: 7, category: "clorogranulado", precio: 480 },
    //     { id: 6, title: "Ph+ Clorotec", description: "Disminuye el parámetro de pH del agua de la piscina.", stock: 1, category: "reguladorph", precio: 2270 }
    // ]
    



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
