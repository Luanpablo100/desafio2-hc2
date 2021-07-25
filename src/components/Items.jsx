import React from 'react'
import Item from './Item'

const Items = ({itemsData}) => {

    return (
        <>
            {itemsData.map((item) => (
                <Item item={item}/>
            ))}
        </>
    )
}

export default Items