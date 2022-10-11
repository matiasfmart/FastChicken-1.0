import React, { useContext } from "react";
import { ItemDetail } from "./ItemDetail";
import { cartContext } from "../context/Provider";

export const OrderDetail = () => {
  const { getItemsMenu } = useContext(cartContext);

  return (
    <div className="container order-detail p-4 mx-4">
      <div className="row mb-3">
        <h1>Pedido</h1>
      </div>
      <div className="row mb-3">
        <ul className="list-group list-group-flush">
          {getItemsMenu().map((item) => (
            <ItemDetail orderItem={item} key={item.id} />
          ))}
        </ul>
      </div>
      <div className="row">
        <div className="d-flex justify-content-between align-items-center">
          <div className="p-2">
            <h1>Total</h1>
          </div>
          <div className="p-2">
            <h1>$1050</h1>
          </div>
        </div>
        <button type="button" className="btn btn-primary btn-lg">
          Terminar Pedido
        </button>
      </div>
    </div>
  );
};
