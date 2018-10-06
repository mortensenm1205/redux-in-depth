import React from 'react'
import DisplayItem from './DisplayItem';

const DisplayList = ({ items, remove }) => {
    return (
        <div>
            {items.map((item, index) => {
                return (
                    <DisplayItem key={index} text={item.text} removal={()=> remove(index)} items={items} />
                )
            })}
        </div>
    )
}

export default DisplayList
