import './ToDoCounter.css';

function ToDoCounter({ total, completed }) {
  return (
    <>
      {/* {!loading && completed === total && (
        <h2 className='ToDoCounter-title'>¡Felicidades, completaste todas tus ToDos!</h2>
      )} */}
      <h2 className='ToDoCounter-title'>
        <span>{completed}</span> ToDos de <span>{total}</span> Completadas
      </h2>
    </>
  );
}

// Esta es otra forma de hacer este componente usando Estilos en Linea y Props
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
