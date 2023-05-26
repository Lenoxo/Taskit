import React from "react";
import { ToDoContext } from "../ToDoContext/ToDoContext";
import "./ToDoForm.css";

function ToDoForm() {
  const { setOpenModal, addToDo } = React.useContext(ToDoContext);
  const [newToDoValue, setNewToDoValue] = React.useState();
  const onSubmit = (event) => {
    if (newToDoValue.length > 1) {
        event.preventDefault();
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
    <form onSubmit={onSubmit}>
      <label className="ToDoForm-label">Escribe tu nuevo ToDo</label>
      <textarea
        onChange={onChange}
        className="textarea"
        placeholder="Llorar con la llorona"
      />
      <div className="ToDoForm-buttonContainer">
        <button className="ToDoForm-button ToDoForm-button--add ">
          Añadir
        </button>
        <button
          type="submit"
          onClick={onCancel}
          className="ToDoForm-button ToDoForm-button--delete "
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export { ToDoForm };
