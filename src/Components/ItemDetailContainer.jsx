import ItemDetail from './ItemDetail';
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

    return (
        <div>
            <ItemDetail pileta={producto} />
        </div>
    )
}

export default ItemDetailContainer