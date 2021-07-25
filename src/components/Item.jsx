import React from 'react';
import "./Item.css"

const Item = ({item}) => {
    return (
        <div className="div-item">
            <img src={item.imgLink} className="item-img"/>
            <h4>{item.name}</h4>

        </div>
    )
}
 
export default Item;