import React from 'react';
import './ToDoFilter.css';
import { ToDoContext } from '../ToDoContext/ToDoContext';

function ToDoFilter() {
  const { searchValue, setSearchValue } = React.useContext(ToDoContext)
  return (
    <input placeholder="Cortar Cebolla" className='ToDoFilter' value={searchValue} onChange={(event) => {
      setSearchValue(event.target.value)
    }}/>
  );
}

export { ToDoFilter };
