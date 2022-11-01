import React, { useContext } from "react";
import { ItemDetail } from "./ItemDetail";
import { cartContext } from "../context/Provider";
import { useEffect } from "react";

export const OrderDetail = ({disableBtn}) => {
  const { orderItems, totalOrder, clearItems } = useContext(cartContext);

  useEffect(()=>{
    orderItems.length ? disableBtn(false) : disableBtn(true);
  })
  
  return (
    <div className="mt-3">
      <div className="col-12 p-4 shadow rounded bg-white">
        <div className="row mb-3">
          <h2 className="fw-bold">Pedido</h2>
        </div>
        {
          orderItems.length ?
            <>
              <div className="row mb-2" id="orderDetails">
                <ul className="list-group list-group-flush">
                  {orderItems.map((item) => ( <ItemDetail orderItem={item} key={item.id}/> ))}
                </ul>
              </div>
              <div className="row mb-3 border rounded shadow-sm">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="p-2">
                    <h4 className="fw-bold text-uppercase text-success">Total</h4>
                  </div>
                  <div className="p-2">
                    <h4 className="fw-bold text-uppercase text-success">${totalOrder()}</h4>
                  </div>
                </div>
              </div>
              <div className="row justify-content-end mb-1">
                <button className='btn btn-danger col-5 p-2 lead fw-bold' onClick={clearItems}>Eliminar Todo<i class="mx-1 bi bi-trash3"></i></button>
              </div>
            </>
          :
          <div className="row mb-3" id="noHayItems">
            <p className="lea text-muted text-center">No hay items</p>
          </div>
        }
      </div>
    </div>
  );
};
