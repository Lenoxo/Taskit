import './App.css';
import { ToDoCounter } from './ToDoCounter';
import { ToDoFilter } from './ToDoFilter';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem'
import { AddToDoButton } from "./AddToDoButton";

// El componente es la función como tal
function App() {
  // El return es el valor que retorna el componente
  return (
    <div className="App">
      {/* Aquí se está instertando un componente (ToDoItem) dentro de este otro componente (App) */}
      <ToDoCounter />
      <ToDoFilter />

      <ToDoList>
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </ToDoList>

      <AddToDoButton />
    </div>
  );
}


export default App;
