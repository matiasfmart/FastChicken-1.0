import React, { useContext } from "react";
import { ItemDetail } from "./ItemDetail";
import { cartContext } from "../context/Provider";

export const OrderDetail = () => {
  const { orderItems, totalOrder } = useContext(cartContext);

  console.log(orderItems)

  return (
    <>
      <div className="container order-detail p-4 m-2 shadow rounded bg-white">
        <div className="row mb-3">
          <h2 className="fw-bold">Pedido</h2>
        </div>
        {
          orderItems.length ?
            <>
              <div className="row mb-3">
                <ul className="list-group list-group-flush">
                  {orderItems.map((item) => ( <ItemDetail orderItem={item} key={item.id}/> ))}
                </ul>
              </div>
              <div className="row">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="p-2">
                    <h4 className="fw-bold">Total</h4>
                  </div>
                  <div className="p-2">
                    <h4 className="fw-bold">${totalOrder()}</h4>
                  </div>
                </div>
                <button type="button" className="btn btn-primary btn-lg fw-semibold">
                  Terminar Pedido
                </button>
              </div>
            </>
          :
          <div className="row mb-3">
            <p className="lea text-muted text-center">No hay items</p>
          </div>
        }
      </div>
    </>
  );
};
