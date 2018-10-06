import React from 'react'

const Display = ({ values, remove }) => {
    return <h3 onClick={remove}>{values}</h3>
}

export default Display
