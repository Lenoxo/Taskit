import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [items, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    const localStorageItems = localStorage.getItem(itemName);
    let parsedItems;
    
    if (localStorageItems) {
      parsedItems = JSON.parse(localStorageItems);
    } else {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItems = initialValue;
    }
  }, [])


  const saveItems = (newItems) => {
    setItem(newItems);
    localStorage.setItem(itemName, JSON.stringify(newItems));
  };

  return {
    items, 
    saveItems,
    loading,
    error
  };
}

export { useLocalStorage };