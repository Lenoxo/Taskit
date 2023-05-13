import './ToDoItem.css'

function ToDoItem(props) {
  return (
    <li className='ToDoItem'>
      {/* Esto es un elemento de React, y todo el return está escrito con sintaxis JSX */}
      <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>V</span>
      <p className={`ToDoItem-p ${props.completed && "ToDoItem-p--completed"}`}>{props.text}</p>
      <span className='Icon Icon-delete'>X</span>
    </li>
  );
}

export { ToDoItem };
