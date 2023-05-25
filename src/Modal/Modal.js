import React from "react";
import ReactDOM from 'react-dom';
import './Modal.css'

const modalContainer = document.getElementById('modal')

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="Modal">
            {children}
        </div>, modalContainer
    );
    
}

export { Modal }