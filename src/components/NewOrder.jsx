import React from "react";
import { MenuList } from "./MenuList";
import { OrderDetail } from "./OrderDetail";

export const NewOrder = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 p-4">
            <MenuList />
        </div>
        <div className="col-4 border-start">
            <OrderDetail />
        </div>
      </div>
    </div>
  );
};
