import React from "react";
import ReactDOM from 'react-dom';

// Primer reto, hacer que el modal se muestre o no, cambiando el estado usando setOpenModal, al hacer click en AddToDoButton
// Segundo reto, darle un estilo bonito al modal, que quede por encima de todos los elementos de la app

const modalContainer = document.getElementById('modal')

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="Modal">
            {children}
        </div>, modalContainer
    );
    
}

export { Modal }