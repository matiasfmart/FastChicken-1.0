import React, { createContext, useState, useEffect , useId } from "react";

export const cartContext = createContext();

function Provider({ children }) {
  const [orderItems, setOrderItems] = useState([]);
  const [itemNum, setItemNum] = useState(0);

  function addItemMenu(item) {

    setItemNum(itemNum + 1);

    setOrderItems([
      ...orderItems,
      {
        id: itemNum,
        name: item.name,
        type: item.type,
        drink: item.drink,
        dish: item.dish,
        price: item.price,
      },
    ]);
  }

  const deleteItem = (id) => {
    const updated = orderItems.filter(element => element.id !== id)
    setOrderItems(updated);
  }

  function editItem(itemEdit){

    debugger

    let aux = orderItems.filter(i => i.id != itemEdit.id);
    let newArray = [...aux, itemEdit]; 
    setOrderItems(newArray.sort((a,b)=>a.id-b.id));
  }

  function totalOrder(){
    return orderItems.reduce((a, b) => a + b.price, 0);
  }

  // function exist(id) {
  //   return orderItems.some((e) => e.id === id);
  // }

  return (
    <cartContext.Provider value={{ addItemMenu, totalOrder, deleteItem, editItem, orderItems }}>
      {children}
    </cartContext.Provider>
  );
}

export default Provider;
