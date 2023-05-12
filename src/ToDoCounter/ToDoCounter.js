import './ToDoCounter.css';

function ToDoCounter({ total, completed }) {
  return (
    <h1>
      <span>{completed}</span> ToDos de <span>{total}</span> Completadas</h1>
  );
}
// function ToDoCounter({ total, completed }) {
//   return (
//     <h1 style={{
//       fontSize: '24px',
//       textAlign: 'center',
//       margin: 0,
//       padding: '48px', 
//     }}>Has completado {completed} de {total} ToDos</h1>
//   );
// }

export { ToDoCounter };
