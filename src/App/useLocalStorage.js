import React from "react";

function useLocalStorage(itemName, initialValue) {
  const localStorageItems = localStorage.getItem(itemName);
  let parsedItems;

  if (localStorageItems) {
    parsedItems = JSON.parse(localStorageItems);
  } else {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItems = initialValue;
  }

  const [items, setItem] = React.useState(parsedItems);
  const saveItems = (newItems) => {
    setItem(newItems);
    localStorage.setItem(itemName, JSON.stringify(newItems));
  };

  return [items, saveItems];
}

export { useLocalStorage };