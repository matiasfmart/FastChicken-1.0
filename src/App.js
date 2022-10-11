import React from 'react';
import './App.css';
import { NewOrder } from './components/NewOrder';
import Provider from './context/Provider';

function App() {  
  return (
    <Provider>
      <div className='m-3'>
        <h1 className='text-center'>Fast Chicken</h1>
      </div>
      <NewOrder />
    </Provider>
  );
}

export default App;
