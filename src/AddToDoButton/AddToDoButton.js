import { ToDoContext } from "../ToDoContext/ToDoContext";
import { FaPlus } from "react-icons/fa";
import React from "react";
import "./AddToDoButton.css";

function AddToDoButton() {
  const { openModal, setOpenModal, setTodoToEdit } =
    React.useContext(ToDoContext);

  return (
    <button
      className="AddToDoButton"
      onClick={(event) => {
        // Al abrir con el botón "+" siempre se crea, nunca se edita.
        setTodoToEdit(null);
        setOpenModal(!openModal);
      }}
    >
      <FaPlus />
    </button>
  );
}

export { AddToDoButton };
