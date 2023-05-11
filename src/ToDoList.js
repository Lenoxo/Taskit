function ToDoList({ children }) {
  return (
    <ul>{children}</ul>
  );
}
// Esta es otra forma de hacerlo con la propiedad props.children
// function ToDoList(props) {
//   return (
//     <ul>{props.children}</ul>
//   );
// }

export { ToDoList };
