import React from "react";

// Esta función contiene toda la lógica relacionada al uso de localStorage

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
        } else {
          parsedItems = initialValue;
        }

        // Migración: asegurar que cada ToDo tenga un id estable.
        // Esto permite editar/eliminar por id incluso con datos antiguos.
        parsedItems = parsedItems.map((item) => ({
          ...item,
          id: item.id || crypto.randomUUID(),
        }));

        setItem(parsedItems);
        localStorage.setItem(itemName, JSON.stringify(parsedItems));
        setLoading(false);
      } catch(error) {
        setLoading(false);
        setError(true);
      }
    }, 1500)
    // El efecto debe ejecutarse solo una vez al montar el hook.
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
