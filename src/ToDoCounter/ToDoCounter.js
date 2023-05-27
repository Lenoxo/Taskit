import { ToDoContext } from '../ToDoContext/ToDoContext';
import './ToDoCounter.css';
import React from 'react';

function ToDoCounter() {
  const { completedToDos, totalToDos, loading } = React.useContext(ToDoContext)
  return (
    <>
      <h1 className='Taskit-title'>Taskit</h1>
      {!loading && completedToDos === totalToDos && (
        <h2 className='ToDoCounter-title'>¡Felicidades, completaste todas tus ToDos!</h2>
      )}
      <h2 className='ToDoCounter-title'>
        <span>{completedToDos}</span> ToDos de <span>{totalToDos}</span> Completadas
      </h2>
    </>
  );
}

// Esta es otra forma de hacer este componente usando Estilos en Linea y Props
// function ToDoCounter({ totalToDos, completedToDos }) {
//   return (
//     <h1 style={{
//       fontSize: '24px',
//       textAlign: 'center',
//       margin: 0,
//       padding: '48px', 
//     }}>Has completado {completedToDos} de {totalToDos} ToDos</h1>
//   );
// }

export { ToDoCounter };
