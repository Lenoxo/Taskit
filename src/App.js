import './App.css';
import { ToDoCounter } from './ToDoCounter';
import { ToDoFilter } from './ToDoFilter';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem'
import { AddToDoButton } from "./AddToDoButton";
import React from 'react';

const defaultToDos = [
  { text: "Cortar Cebolla", completed: false},
  { text: "Tomar el Curso de React.js", completed: false},
  { text: "Llorar con la llorona", completed: false},
  { text: "EEEEEEEepa", completed: false},
  { text: "CHIIIII", completed: false},
]
// El componente es la función como tal
function App() {
  // El return es el valor que retorna el componente
  return (
    // Esta es una forma de renderizar estos elementos, la otra es usar un div para contener todo
    <React.Fragment>
      {/* Aquí se está instertando un componente (ToDoItem) dentro de este otro componente (App) */}
      <ToDoCounter completed={16} total={25}/>
      <ToDoFilter />

      <ToDoList>
        {defaultToDos.map(todo => {
          return <ToDoItem
            // A la hora de trabajar con arrays, es necesario que cada elemento tenga un valor único, y tiene que guardarse con el atributo key 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}/>
        })}
      </ToDoList>

      <AddToDoButton />
    </React.Fragment>
  );
}


export default App;
