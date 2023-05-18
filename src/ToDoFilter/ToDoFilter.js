import './ToDoFilter.css';

function ToDoFilter({ searchValue, setSearchValue }) {
  return (
    <input placeholder="Cortar Cebolla" className='ToDoFilter' value={searchValue} onChange={(event) => {
      setSearchValue(event.target.value)
    }}/>
  );
}

export { ToDoFilter };
