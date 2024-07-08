"use client";

import React from 'react';
import './styles.css';  // Asegúrate de que los estilos se importen correctamente

const StyledButton = ({ onClick, children }) => {
  return (
    <button 
          className='.btn'
          onClick={onClick}
          disabled={false}
          >
            {children}
          </button>
  );
};

export default StyledButton;
