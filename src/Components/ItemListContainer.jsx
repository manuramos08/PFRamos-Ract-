import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {collection, getDocs, getFirestore} from "firebase/firestore"
import Loader from './Loader';


const ItemListContainer = () => {

    const { category } = useParams()

    const [productos, setProductos] = useState([])

    const [loading, setLoading] = useState(true);

    useEffect (()=> {
        const db = getFirestore()

        const itemsCollection = collection (db, "Productos-piletas")
        getDocs(itemsCollection).then((snapshot)=>{
            const docs = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            setProductos(docs)
        })
    }, [])

    
    const filtrarProductos = productos.filter((producto) => producto.category === category)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    
    return (
        <>
            {
                loading ? 
                <Loader/> 
                :
                
                (category ? <ItemList productos={filtrarProductos} /> : <ItemList productos={productos} />)
            }
        </>
    )
}

export default ItemListContainer