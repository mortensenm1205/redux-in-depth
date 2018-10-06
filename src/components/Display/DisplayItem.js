import React from 'react'

const DisplayItem = ({ text, removal }) => (
    <div>
    <h3 onClick={removal}>{text}</h3>
    </div>
);

export default DisplayItem;