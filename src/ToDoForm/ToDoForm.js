import React from "react";
import { ToDoContext } from "../ToDoContext/ToDoContext";
import "./ToDoForm.css";

function ToDoForm() {
  const {
    setOpenModal,
    addToDo,
    editToDo,
    todoToEdit,
    setTodoToEdit,
  } = React.useContext(ToDoContext);

  // Si hay un ToDo en edición, el formulario se abre con su texto actual.
  const [newToDoValue, setNewToDoValue] = React.useState(
    todoToEdit?.text ?? ""
  );

  const isEditing = Boolean(todoToEdit);

  const closeModal = () => {
    setOpenModal(false);
    setTodoToEdit(null);
  };

  const onSubmit = (event) => {
    // Handle form submission - either by clicking the "Add" button or pressing Enter
    event.preventDefault();

    // Only add/edit the task if there's text in the input field
    if (newToDoValue.trim() !== "") {
      if (isEditing) {
        editToDo(todoToEdit.id, newToDoValue);
      } else {
        addToDo(newToDoValue);
      }
      closeModal();
    }
  };

  const onCancel = () => {
    closeModal();
  };

  const onChange = (event) => {
    setNewToDoValue(event.target.value);
  };

  return (
    <form
      onSubmit={onSubmit}
      onKeyDown={(event) => {
        // Handle Enter key press - create/edit task when Enter is pressed and there's text in input
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
      <label className="ToDoForm-label">
        {isEditing ? "Edita tu ToDo" : "Escribe tu nuevo ToDo"}
      </label>
      <textarea
        onChange={onChange}
        className="textarea"
        placeholder={isEditing ? "Edita tu tarea!" : "Escribe tu nueva tarea!"}
        required
        value={newToDoValue}
        autoFocus={true}
      />
      <div className="ToDoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="ToDoForm-button ToDoForm-button--delete "
        >
          Cancelar
        </button>
        <button
          type="submit"
          className={`ToDoForm-button ${
            isEditing ? "ToDoForm-button--save" : "ToDoForm-button--add"
          }`}
        >
          {isEditing ? "Guardar" : "Añadir"}
        </button>
      </div>
    </form>
  );
}

export { ToDoForm };
