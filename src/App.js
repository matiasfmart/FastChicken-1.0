import React, { useState } from 'react';
import './App.css';
import Provider from './context/Provider';
import { MenuList } from "../src/components/MenuList";
import { OrderDetail } from "../src/components/OrderDetail";

function App() {

  const [disableBtn, setDisableBtn] = useState(true);

  return (
    <Provider>
      <div className="container-xl">
        <div className="row">
          <div className="col-8 p-2 border-end" id="newOrderMenuList">
            <div className='m-3'>
              <h1 className='fw-bold'>Fast Chicken</h1>
            </div>
            <MenuList />
          </div>
          <div className="col-4">
            <div className='row' id='rowOrder'>
              <OrderDetail disableBtn={setDisableBtn}/>
              <div className='container'>
                <button type="button" id="btnFinishOrder" disabled={disableBtn} className="col-12 p-3 btn btn-primary btn-lg fw-semibold mb-4">
                  Terminar Pedido
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
