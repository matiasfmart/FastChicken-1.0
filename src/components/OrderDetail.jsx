import React, { useContext } from "react";
import { ItemDetail } from "./ItemDetail";
import { cartContext } from "../context/Provider";

export const OrderDetail = () => {
  const { orderItems, totalOrder } = useContext(cartContext);

  return (
    <>
      <div className="container order-detail p-4 mx-2">
        <div className="row mb-3">
          <h1>Pedido</h1>
        </div>
        <div className="row mb-3">
          <ul className="list-group list-group-flush">
            {orderItems && orderItems.map((item) => ( <ItemDetail orderItem={item} key={item.id}/> ))}
          </ul>
        </div>
        <div className="row">
          <div className="d-flex justify-content-between align-items-center">
            <div className="p-2">
              <h1>Total</h1>
            </div>
            <div className="p-2">
              <h1>${totalOrder()}</h1>
            </div>
          </div>
          <button type="button" className="btn btn-primary btn-lg">
            Terminar Pedido
          </button>
        </div>
      </div>
    </>
  );
};
