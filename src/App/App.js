import { ToDoProvider } from "../ToDoContext/ToDoContext";
import "./App.css";
import { AppUI } from "./AppUI";
import React from "react";

function App() {
  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export default App;
