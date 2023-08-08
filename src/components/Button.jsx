import React from 'react';


function Button({onClick, text, color}) {
  return (
    <div>
      <button className='btn longButton' onClick={onClick} style={{ color: color || 'white' }}>
        {text}
      </button>
    </div>
  );
}

export default Button;
