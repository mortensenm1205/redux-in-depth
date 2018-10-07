import React from 'react'
import DisplayItem from './DisplayItem';

const DisplayList = ({ items, remove }) => {
    return (
        <div>
            {items.map((item, index) => {
                return (
                    <DisplayItem key={index} removal={()=> remove(index)} {...item} />
                )
            })}
        </div>
    )
}

export default DisplayList
