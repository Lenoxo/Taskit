import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [items, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  // useEffect es un hook que permite ejecutar solo cuando es necesario este codigo.
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);
        let parsedItems;
  
        if (localStorageItems) {
          parsedItems = JSON.parse(localStorageItems);
          setItem(parsedItems)
        } else {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue;
        }
        
        setLoading(false);        
      } catch(error) {
        setLoading(false);
        setError(true);
      }
    }, 1500)
  }, []); // Los corchetes aquí son de un array vacio, que indica que solo se ejecute una vez.
  // Si hubiera un estado que hiciera necesario actualizar el estado, puedes ponerlo dentro del array vacio.
  
  const saveItems = (newItems) => {
    setItem(newItems);
    localStorage.setItem(itemName, JSON.stringify(newItems));
  };

  return {
    items,
    saveItems,
    loading,
    error,
  };
}

export { useLocalStorage };
