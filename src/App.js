import logo from './platzi.webp';
import './App.css';

// El componente es la función como tal
function App() {
  // El return es el valor que retorna el componente
  return (
    <div className="App">
      {/* Aquí se está instertando un componente (ToDoItem) dentro de este otro componente (App) */}
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendiendo React
        </a>
      </header>
    </div>
  );
}

function ToDoItem() {
  return (
    <li>
      {/* Esto es un elemento de React, y todo el return está escrito con sintaxis JSX */}
      <span>V</span>
      <p>Limpia la cebolla, y llora con la llorona</p>
      <span>X</span>
    </li>
  );
}

export default App;
