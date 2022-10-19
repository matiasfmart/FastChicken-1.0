import React, { createContext, useState } from "react";

export const cartContext = createContext();

function Provider({ children }) {
  const [orderItems, setOrderItems] = useState([]);

  function addItemMenu(item) {
    if (exist(item.id)) {
      console.log("El item ya existia");
      const indexItem = orderItems.findIndex((e) => e.id === item.id);
      orderItems[indexItem].count = orderItems[indexItem].count + 1;
      setOrderItems([...orderItems]);
    } else {
      setOrderItems([
        ...orderItems,
        {
          id: item.id,
          name: item.name,
          drink: item.drink,
          dish: item.dish,
          price: item.price,
          count: 1,
        },
      ]);
    }
  }

  const deleteItem = (id) => {
    const updated = orderItems.filter(element => element.id !== id)
    setOrderItems(updated);
  }

  function totalOrder(){
    return orderItems.reduce((a, b) => a + (b.price * b.count), 0);
  }

  function getItemsMenu() {
    return orderItems;
  }

  function exist(id) {
    return orderItems.some((e) => e.id === id);
  }

  return (
    <cartContext.Provider value={{ addItemMenu, getItemsMenu, totalOrder, deleteItem }}>
      {children}
    </cartContext.Provider>
  );
}

export default Provider;
