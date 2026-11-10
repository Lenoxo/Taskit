import React from "react";
import { ToDoContext } from "../ToDoContext/ToDoContext";
import "./ToDoForm.css";

function ToDoForm() {
  const { setOpenModal, addToDo } = React.useContext(ToDoContext);
  const [newToDoValue, setNewToDoValue] = React.useState("");

  const onSubmit = (event) => {
    // Handle form submission - either by clicking the "Add" button or pressing Enter
    event.preventDefault();

    // Only add the task if there's text in the input field
    if (newToDoValue.trim() !== "") {
      addToDo(newToDoValue);
      setOpenModal(false);
    }
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewToDoValue(event.target.value);
  };

  return (
    <form
      onSubmit={onSubmit}
      onKeyDown={(event) => {
        // Handle Enter key press - create task when Enter is pressed and there's text in input
        if (event.key === "Enter" && newToDoValue.trim() !== "") {
          event.preventDefault();
          onSubmit(event);
        }
        // Handle Escape key press - cancel the form when Escape is pressed
        if (event.key === "Escape") {
          event.preventDefault();
          onCancel();
        }
      }}
    >
      <label className="ToDoForm-label">Escribe tu nuevo ToDo</label>
      <textarea
        onChange={onChange}
        className="textarea"
        placeholder="Escribe tu nueva tarea!"
        required
        value={newToDoValue}
        autoFocus={true}
      />
      <div className="ToDoForm-buttonContainer">
        <button
          onClick={onCancel}
          className="ToDoForm-button ToDoForm-button--delete "
        >
          Cancelar
        </button>
        <button type="submit" className="ToDoForm-button ToDoForm-button--add ">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { ToDoForm };
