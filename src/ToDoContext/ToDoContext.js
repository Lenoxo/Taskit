import { useLocalStorage } from "./useLocalStorage";
import React from "react";

// Esta es la primera parte al usar React Context, que es crear un contexto.
const ToDoContext = React.createContext();

// const defaultToDos = [
//   { text: "Cortar Cebolla", completed: true},
//   { text: "Tomar el Curso de React.js", completed: false},
//   { text: "Llorar con la llorona", completed: false},
//   { text: "EEEEEEEepa", completed: true},
//   { text: "CHIIIII", completed: true},
//   { text: "ñooooooo", completed: false},
// ];
// const stringToDos = JSON.stringify(defaultToDos);
// localStorage.setItem('TODOS_V1', stringToDos);
// localStorage.removeItem('TODOS_V1');

// Esta función contiene toda la lógica relacionada al uso de localStorage

function ToDoProvider({ children }) {
  // Esto es la desestructuración del return del custom hook localStorage
  const {
    items: toDos,
    saveItems: saveToDos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const [openModal, setOpenModal] = React.useState(false)

  const completedToDos = toDos.filter((toDo) => !!toDo.completed).length;
  // Otra forma de hacer esto, es usando Boolean(toDo.completed)
  const totalToDos = toDos.length;

  const filteredToDos = toDos.filter((toDo) => {
    const toDoText = toDo.text.toLowerCase();
    const toDoFilteredText = searchValue.toLowerCase();

    return toDoText.includes(toDoFilteredText);
  });

  function toggleToDoState(index) {
    const updatedToDos = [...toDos]; // Hacer una copia del array toDos
    updatedToDos[index].completed = !updatedToDos[index].completed; // Cambiar el valor booleano
    saveToDos(updatedToDos); // Actualizar el estado toDos con el array modificado
  }

  function deleteToDo(index) {
    const updatedToDos = [...toDos]; // Hacer una copia del array toDos
    updatedToDos.splice(index, 1); // splice permite eliminar elementos de un array
    saveToDos(updatedToDos); // Actualiza el estado ToDos
  }

  return (
    <ToDoContext.Provider
      value={{
        completedToDos,
        totalToDos,
        searchValue,
        setSearchValue,
        filteredToDos,
        toggleToDoState,
        deleteToDo,
        loading,
        error,
        openModal,
        setOpenModal
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}

/*
Esta fue la segunda parte al usar React Context, que es usar la sintaxis con el ContextoCreado.Provider.

El atributo value contiene todos los estados que se van a compartir desde ToDoContext.Provider en este caso.

Con props.children, se permite que los elementos hijos, tengan acceso a esas propiedades.
*/

export { ToDoContext, ToDoProvider };
