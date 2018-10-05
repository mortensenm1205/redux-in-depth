import React from 'react';

const Input = ({ displayText, change }) => {
  return <input type="text" value={displayText} onChange={change} />
}

export default Input
