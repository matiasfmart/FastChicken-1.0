import React, { useState } from "react";

export const ItemCount =({stock, initial}) => {

    const [count, setCount] = useState(initial ? initial : 0);

    function remove(){ count ? setCount(count - 1) : setCount(0) }
    function add(){ count < stock ? setCount(count + 1) : setCount(count) }
    // function toOnAdd(){
    //     count ? onAdd(count) : alert('No ingreso productos a su compra');
    // }

    return ( 
        <>
            <div className="btn-group">
                <button onClick={remove} className="btn-addRemove btn btn-outline-primary">-</button>
                <h4 className="count">{count}</h4>
                <button onClick={add} className="btn-addRemove btn btn-outline-primary">+</button>
            </div>
        </>
    )
}