import React from 'react';
import './App.css';
import { NewOrder } from './components/NewOrder';

function App() {  
  return (
    <>
      <div className='m-3'>
        <h1 className='text-center'>Fast Chicken</h1>
      </div>
      <NewOrder />
    </>
  );
}

export default App;
