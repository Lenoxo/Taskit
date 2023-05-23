import { ToDoCounter } from './ToDoCounter/ToDoCounter';
import { ToDoFilter } from './ToDoFilter/ToDoFilter';
import { ToDoList } from './ToDoList/ToDoList';
import { ToDoItem } from './ToDoItem/ToDoItem';
import { AddToDoButton } from "./AddToDoButton/AddToDoButton";
import './App.css';
import React from 'react';

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


function App() {
  const localStorageToDos = localStorage.getItem('TODOS_V1');
  let parsedToDos;
  if (localStorageToDos) {
    parsedToDos = JSON.parse(localStorageToDos);
  } else {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedToDos = [];
  }
  
  const [ toDos, setToDos ] = React.useState(parsedToDos);
  const [searchValue, setSearchValue] = React.useState('');
  console.log('Los usuarios buscan todos de ' + searchValue);

  const completedToDos = toDos.filter(toDo => !!toDo.completed).length;
  // Otra forma de hacer esto, es usando Boolean(toDo.completed)
  const totalToDos = toDos.length;
  
  const filteredToDos = toDos.filter((toDo) => {
    const toDoText = toDo.text.toLowerCase();
    const toDoFilteredText = searchValue.toLowerCase();

    return toDoText.includes(toDoFilteredText);
  });

  const saveToDos = (newToDos) => {
    setToDos(newToDos);
    localStorage.setItem('TODOS_V1', JSON.stringify(newToDos))
  }

  function toggleToDoState(index) {
    const updatedToDos = [...toDos]; // Hacer una copia del array toDos
    updatedToDos[index].completed = !updatedToDos[index].completed; // Cambiar el valor booleano
    saveToDos(updatedToDos); // Actualizar el estado toDos con el array modificado
  };
  
  function deleteToDo(index) {
    const updatedToDos = [...toDos]; // Hacer una copia del array toDos
    updatedToDos.splice(index, 1); // splice permite eliminar elementos de un array
    saveToDos(updatedToDos); // Actualiza el estado ToDos
  };

  // El return es el valor que retorna el componente
  return (
    // Esta es una forma de renderizar estos elementos, la otra es usar un div para contener todo
    <>
      {/* Aquí se está instertando un componente (ToDoItem) dentro de este otro componente (App) */}
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
  );
}


export default App;
