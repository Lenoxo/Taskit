import "./ToDoItem.css";
import React from "react";
// Esta es una forma especial de hacer imports, cambiando el nombre usando as.
import { BsCheckCircle as CheckIcon } from "react-icons/bs";
import { BsXCircle as DeleteIcon } from "react-icons/bs";

function ToDoItem(props) {
  return (
    <li className="ToDoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.toggleToDoState}
      >
        <CheckIcon />
      </span>
      <p className={`ToDoItem-p ${props.completed && "ToDoItem-p--completed"}`}>
        {props.text}
      </p>
      <span className='Icon Icon-delete' onClick={props.deleteToDo}>
        <DeleteIcon />
      </span>
    </li>
  );
}

export { ToDoItem };
