import React, { useContext, useState } from 'react'
import { cartContext } from '../context/Provider';
import { ModalMenu } from './ModalMenu';
export const Menu = ({menuData}) => {
  
  const { addItemMenu } =  useContext(cartContext);
  const [showModal, setShowModal] = useState(false);

  const [valueDrink, setValueDrink] = useState("");
  const [valueDish, setValueDish] = useState("");

  function resetModalValues(){
    setValueDrink("")
    setValueDish("")
  }

  const handleChangeDrink = (val) => setValueDrink(val)
  const handleChangeDish = (val) => setValueDish(val)

  function handleClose(){
     setShowModal(false);
  };

  function handleShow(){
    if((menuData.type != "ex") || (menuData.name == "Gaseosa")){
      setShowModal(true) 
    }else{
      const extraItem = {
        "id": menuData.id,
        "type": menuData.type,
        "name": menuData.name,
        "dish": menuData.description,
        "price": menuData.price
      }
      addItemMenu(extraItem);
    }
  };

  function addItem(){
    const item = {
      "id": menuData.id,
      "type": menuData.type,
      "name": menuData.name,
      "dish": valueDish,
      "drink": valueDrink,
      "price": menuData.price
    }
    addItemMenu(item);
    handleClose();
    resetModalValues();
  }

  return (
    <div className="col-md-4 mb-3">
      <button className='btn-menu py-3 px-2 btn btn-outline-primary shadow-sm rounded' type="button" onClick={handleShow}>
          <div className="container">
            <h5 className='title-menu fw-semibold'>{menuData.name}</h5>
            <div className="row">
              <div className="col-12">
                <h6 className='text-muted'><small>{menuData.description}</small></h6>
              </div>
            </div>
          </div>
      </button>

      <ModalMenu
        addItem={addItem}
        handleClose={handleClose}
        handleChangeDrink={handleChangeDrink}
        handleChangeDish={handleChangeDish}
        showModal={showModal}
        valueDish={valueDish}
        valueDrink={valueDrink}
        item={menuData}
      />
    </div>
  )
}