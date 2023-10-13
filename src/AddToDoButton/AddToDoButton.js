import { ToDoContext } from "../ToDoContext/ToDoContext";
import { FaPlus } from "react-icons/fa";
import React from "react";
import "./AddToDoButton.css";

function AddToDoButton() {
  const { openModal, setOpenModal } = React.useContext(ToDoContext);
  return (
    <button
      className="AddToDoButton"
      onClick={(event) => {
        setOpenModal(!openModal);
      }}
    >
      <FaPlus />
    </button>
  );
}

export { AddToDoButton };
