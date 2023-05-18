import React, { useState } from 'react';
import './ToDoFilter.css';

function ToDoFilter() {
  const [searchValue, setSearchValue] = React.useState();
  useState('');
  console.log('Los usuarios buscan todos de ' + searchValue);
  return (
    <input placeholder="Cortar Cebolla" className='ToDoFilter' value={searchValue} onChange={(event) => {
      setSearchValue(event.target.value)
    }}/>
  );
}

export { ToDoFilter };
