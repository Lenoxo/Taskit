import { ToDoContext } from '../ToDoContext/ToDoContext';
import React from 'react';
import './AddToDoButton.css'

function AddToDoButton() {
    const { openModal, setOpenModal } = React.useContext(ToDoContext)
return (
    <button className='AddToDoButton' onClick={(event) => {
        console.log('Le diste click');
        console.log(event);
        console.log(event.target);
        setOpenModal(!openModal);
    }}>+</button>
);
}

export { AddToDoButton }