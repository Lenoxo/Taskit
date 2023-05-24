import { useLocalStorage } from "./useLocalStorage";
import "./App.css";
import { AppUI } from "./AppUI";
import React from "react";

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

function App() {
  // Esto es la desestructuración del return del custom hook localStorage
  const [toDos, saveToDos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedToDos = toDos.filter((toDo) => !!toDo.completed).length;
  // Otra forma de hacer esto, es usando Boolean(toDo.completed)
  const totalToDos = toDos.length;

  console.log('Log 1');
  // React.useEffect(() => {
  //   console.log('Loooooooooog 2')
  // });

  // React.useEffect(() => {
  //   console.log('Loooooooooog 2')
  // }, []);
  // console.log('Log 3');

  React.useEffect(() => {
    console.log('Loooooooooog 2')
  }, [totalToDos]);
  console.log('Log 3');

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

  // El return es el valor que retorna el componente
  return (
    <AppUI
      completedToDos={completedToDos}
      totalToDos={totalToDos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filteredToDos={filteredToDos}
      toggleToDoState={toggleToDoState}
      deleteToDo={deleteToDo}
    />
  );
};

export default App;
