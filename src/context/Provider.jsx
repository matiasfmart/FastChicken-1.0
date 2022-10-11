import React, { createContext, useState } from 'react';

export const cartContext = createContext(); 

function Provider({ children }) {

    const [orderItems, setOrderItems] = useState([]);

    function addItemMenu(item){
        if(exist(item.id)){
            console.log('El item ya existia');
            const indexItem = orderItems.findIndex(e => e.id === item.id);
            orderItems[indexItem].count = orderItems[indexItem].count + 1;
            setOrderItems([...orderItems]);
        }else{
            setOrderItems([...orderItems, { id: item.id, name: item.name, count: 1 }]);
        }
    }

    function getItemsMenu(){
        return orderItems;
    }

    function exist(id){
        return orderItems.some(e => e.id === id);
    }

    return( 
        <cartContext.Provider value={{ addItemMenu, getItemsMenu }}>
            {children}
        </cartContext.Provider>
    )
}

export default Provider;