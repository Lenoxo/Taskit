import { ToDoContext } from '../ToDoContext/ToDoContext';
import React from 'react';
import './AddToDoButton.css'

function AddToDoButton() {
    const { openModal, setOpenModal } = React.useContext(ToDoContext)
return (
    <button className='AddToDoButton' onClick={(event) => {
        setOpenModal(!openModal);
    }}>+</button>
);
}

export { AddToDoButton }