import React, { useContext } from 'react'
import { cartContext } from '../context/Provider';

export const Menu = ({menuData}) => {
  
  const { addItemMenu } =  useContext(cartContext);

  function addItem(){
    addItemMenu(menuData);
  }

  return (
    <div className="col-md-4 mt-4">
      <button className='btn-menu py-3 px-2 btn btn-outline-primary' type="button" onClick={ ()=> addItem() }>
          <div className="container">
            <h5 className='title-menu'>{menuData.name}</h5>
            <div className="row">
              <div className="col-12">
                <h6 className='text-muted'><small>{menuData.description}</small></h6>
              </div>
            </div>
          </div>
      </button>
    </div> 
  )
}
