import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {

    return (
        <>
            {productos.map((p) => {
                return (
                    <Item
                        key={p.id}
                        id={p.id}
                        title={p.title}
                        description={p.description}
                        category={p.category}
                    />
                )
            })}
        </>
    )
}

export default React.memo(ItemList)