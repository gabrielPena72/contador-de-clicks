import React from 'react';
import '../styles/Boton.css';

function Boton({texto, esBotondeClick, manejarClick}) {
  return(
    <button className={esBotondeClick ? 'boton-clic' : 'boton-reiniciar'} 
    onClick={manejarClick}>
      {texto}
    </button>
  );
}

export default Boton