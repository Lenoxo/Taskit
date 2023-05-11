function ToDoItem(props) {
  return (
    <li>
      {/* Esto es un elemento de React, y todo el return está escrito con sintaxis JSX */}
      <span>V</span>
      <p>{props.text}</p>
      <span>X</span>
    </li>
  );
}

export { ToDoItem };
