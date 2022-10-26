import React from 'react';
import './App.css';
import Provider from './context/Provider';
import { MenuList } from "../src/components/MenuList";
import { OrderDetail } from "../src/components/OrderDetail";

function App() {  
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
            <OrderDetail />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
