import React from 'react';

function Button({ label, onClick, className }) {
  return (
    <button className={`action-button ${className || ''}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;