import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {

    return (
        <div className='divCard'>
            {productos.map((p) => {
                return (
                    <Item
                        key={p.id}
                        id={p.id}
                        title={p.title}
                        img={p.img}
                        description={p.description}
                    />
                )
            })}
        </div>
    )
}

export default React.memo(ItemList)