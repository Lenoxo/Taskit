import './ToDoFilter.css'

function ToDoFilter() {
  return (
    <input placeholder="Cortar Cebolla" className='ToDoFilter' onChange={(event) => {
      console.log('Escribiste en ToDoFilter');
      console.log(event);
      console.log(event.target.value);
    }}/>
  );
}

export { ToDoFilter };
