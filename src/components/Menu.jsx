import React, { useContext, useState } from 'react'
import { cartContext } from '../context/Provider';
import { ModalMenu } from './ModalMenu';

export const Menu = ({menuData}) => {
  
  const { addItemMenu } =  useContext(cartContext);
  const [selectedMenu, setSelectedMenu] = useState(0);

  function addItem(){
    addItemMenu(menuData);
  }

  function selectMenu(){
    setSelectedMenu(menuData);
  }

  return (
    <div className="col-md-4 mt-4">
      <button className='btn-menu py-3 px-2 btn btn-outline-primary' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={selectMenu}>
          <div className="container">
            <h5 className='title-menu'>{menuData.name}</h5>
            <div className="row">
              <div className="col-12">
                <h6 className='text-muted'><small>{menuData.description}</small></h6>
              </div>
            </div>
          </div>
      </button>
        <ModalMenu selectedMenu={selectedMenu}/>
    </div> 
  )
}
