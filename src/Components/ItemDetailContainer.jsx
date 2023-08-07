import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {

    const productos = [
        { id: 1, title: "Alguicida Mantenimiento Clorotec", description: "Previene la formación de algas, protege la desinfección del cloro y mantiene la transparencia deseada", stock: 5, category: "alguicidas" },
        { id: 2, title: "Alguicida Choque Clorotec", description: "Elimina la mayoría de las algas, protege la desinfección del cloro y mantiene la transparencia deseada", stock: 2, category: "alguicidas" },
        { id: 3, title: "Clarificador Clorotec", description: "Decanta las impurezas del agua y protege la desinfección del cloro", stock: 4, category: "clarificadores" },
        { id: 4, title: "Cloro en pastillas Triple Acción", description: "Para todo tipo de Piletas. Su uso es siempre dentro de una boya o skimmer. ", stock: 15, category: "cloropastillas" },
        { id: 5, title: "Cloro granulado Disolución Lenta", description: "Ideal para piscinas revestidas", stock: 7, category: "clorogranulado" },
        { id: 6, title: "Ph+ Clorotec", description: "Disminuye el parámetro de pH del agua de la piscina.", stock: 1, category: "reguladorph" }
    ]

    const traerProductos = new Promise((resolve, reject) => {
        if (productos.length > 0) {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        } else {
            reject(new Error ("No hay datos disponibles"));
        }
    })

    traerProductos
        .then((res) => {
        })
        .catch((error) => {
            console.log(error);
        });



    return (
        <div>
            <ItemDetail productos={productos} />
        </div>
    )
}

export default ItemDetailContainer