import { ToDoCounter } from "../ToDoCounter/ToDoCounter";
import { ToDoFilter } from "../ToDoFilter/ToDoFilter";
import { ToDoList } from "../ToDoList/ToDoList";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import { AddToDoButton } from "../AddToDoButton/AddToDoButton";
import { ToDoLoading } from "../ToDoLoading/ToDoLoading";
import { ToDoError } from "../ToDoError/ToDoError";
import { EmptyToDos } from "../EmptyToDos/EmptyToDos";
import { Modal } from "../Modal/Modal";
import { ToDoContext } from "../ToDoContext/ToDoContext";
import React from "react";
import { ToDoForm } from "../ToDoForm/ToDoForm";

function AppUI() {
  const { filteredToDos, toggleToDoState, deleteToDo, loading, error, openModal, setOpenModal } =
    React.useContext(ToDoContext);

  return (
    // Esta es una forma de renderizar estos elementos, la otra es usar un div para contener todo
    <>
      <ToDoCounter />
      <ToDoFilter />
      {/* Esta es la tercera parte de usar React Context, y en especifico usa una Render Function */}
      <ToDoList>
        {loading && <ToDoLoading />}
        {error && <ToDoError />}
        {!loading && filteredToDos.length === 0 && <EmptyToDos />}

        {filteredToDos.map((todo) => {
          return (
            <ToDoItem
              // A la hora de trabajar con arrays, es necesario que cada elemento tenga un valor único, y tiene que guardarse con el atributo key
              key={todo.text}
              text={todo.text}
              toggleToDoState={() => {
                const todoIndex = filteredToDos.indexOf(todo);
                toggleToDoState(todoIndex);
              }}
              completed={todo.completed}
              deleteToDo={() => {
                const todoIndex = filteredToDos.indexOf(todo);
                deleteToDo(todoIndex);
              }}
            />
          );
        })}
      </ToDoList>

      <AddToDoButton />
      {openModal && (
        <Modal>
        <ToDoForm />
      </Modal>
      )}
    </>
  );
}

export { AppUI };
