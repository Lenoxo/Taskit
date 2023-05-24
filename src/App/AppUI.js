import { ToDoCounter } from "../ToDoCounter/ToDoCounter";
import { ToDoFilter } from "../ToDoFilter/ToDoFilter";
import { ToDoList } from "../ToDoList/ToDoList";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import { AddToDoButton } from "../AddToDoButton/AddToDoButton";

function AppUI({
    completedToDos,
    totalToDos,
    searchValue,
    setSearchValue,
    filteredToDos,
    toggleToDoState,
    deleteToDo
}) {
  return (
  // Esta es una forma de renderizar estos elementos, la otra es usar un div para contener todo
  <>
    {/* Aquí se está insertando un componente (ToDoItem) dentro de este otro componente (App) */}
    {completedToDos === totalToDos && (
      <h2>¡Felicidades, completaste todas tus ToDos!</h2>
    )}
    <ToDoCounter completed={completedToDos} total={totalToDos} />
    <ToDoFilter searchValue={searchValue} setSearchValue={setSearchValue} />
    <ToDoList>
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
  </>
)};

export { AppUI };
