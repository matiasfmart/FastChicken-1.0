import React, { useContext } from "react";
import { cartContext } from "../context/Provider";

export const ItemDetail = ({orderItem}) => {

  const { deleteItem } = useContext(cartContext);

  function deleteItemMenu(){
    deleteItem(orderItem.id);
  }

  return (
    <li className="list-group-item px-0">
      <div className="d-flex flex-row justify-content-between align-items-center">
          <div className="p-2"><label><b>{orderItem.name}</b></label></div>
          <div className="d-flex flex-row justify-content-center align-items-center">
              <div className="p-2"><button className='btn-addRemove btn btn-outline-primary'>-</button></div>
              <div className="p-2"><label><b>{orderItem.count}</b></label></div>
              <div className="p-2"><button className='btn-addRemove btn btn-outline-primary'>+</button></div>
          </div>
          <div className="p-2"><label><b>${orderItem.price}</b></label></div>
          <button className='btn btn-outline-danger' onClick={deleteItemMenu}>
            <i className="bi bi-trash3"></i>
          </button>
      </div>
        {/* <div className="container">
        </div> */}
    </li>
  )
}
