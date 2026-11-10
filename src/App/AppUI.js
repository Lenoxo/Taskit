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
  const {
    filteredToDos,
    toggleToDoState,
    deleteToDo,
    loading,
    error,
    openModal,
    setOpenModal,
    setTodoToEdit,
  } = React.useContext(ToDoContext);

  React.useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.shiftKey && event.key === 'A') {
        console.info('A pressed!')
        setTodoToEdit(null);
        setOpenModal(true);
      }
    };

    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [setOpenModal, setTodoToEdit]);

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
              // Cada ToDo tiene un id único y estable, lo que evita errores al
              // editar o eliminar cuando hay un filtro de búsqueda activo.
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              toggleToDoState={() => {
                toggleToDoState(todo.id);
              }}
              deleteToDo={() => {
                deleteToDo(todo.id);
              }}
              onEdit={() => {
                setTodoToEdit(todo);
                setOpenModal(true);
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