import React, { useContext, useState } from "react";
import { cartContext } from "../context/Provider";
import { ModalMenu } from "./ModalMenu";

export const ItemDetail = ({orderItem}) => {

  const { deleteItem, editItem } = useContext(cartContext);
  
  //#region modal
  const [showModal, setShowModal] = useState(false);
  const [valueDrink, setValueDrink] = useState();
  const [valueDish, setValueDish] = useState();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleChangeDrink = (val) => setValueDrink(val);
  const handleChangeDish = (val) => setValueDish(val);

  function resetModalValues(){
    setValueDrink("")
    setValueDish("")
  }

  function addItemEdit(){

    const item = {
      "id": orderItem.id,
      "type": orderItem.type,
      "name": orderItem.name,
      "dish": valueDish,
      "drink": valueDrink,
      "price": orderItem.price
    }
    editItem(item);
    handleClose();
    resetModalValues();
  }

  function getEditItem(){
    setValueDish(orderItem.dish);
    setValueDrink(orderItem.drink);
    handleShow();
  }
  //#endregion

  function deleteItemMenu(){
    deleteItem(orderItem.id);
  }

  return (
    <>
      <li className="list-group-item px-0">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div className="container-fluid">
            <div className="row"><div className=""><label className="text-primary"><b>{orderItem.name}</b></label></div></div>
            <div className="row"><div className=""><label><b>${orderItem.price}</b></label></div></div>
          </div>
          <div className="container-fluid">
            <div className="row justify-content-center">{orderItem.drink}</div>
            <div className="row justify-content-center">{orderItem.dish}</div>
          </div>
          <div className="container-fluid d-flex justify-content-end">
              <button className='btn btn-outline-success mx-1' onClick={getEditItem}>
                <i className="bi bi-pencil-square"></i>
              </button>
              <button className='btn btn-outline-danger mx-1' onClick={deleteItemMenu}>
                <i className="bi bi-trash3"></i>
              </button>
          </div>
        </div>
      </li>
      <ModalMenu
        addItem={addItemEdit}
        handleClose={handleClose}
        handleChangeDrink={handleChangeDrink}
        handleChangeDish={handleChangeDish}
        showModal={showModal}
        valueDish={valueDish}
        valueDrink={valueDrink}
        item={orderItem}
      />
      {/* {
        showModal &&
      } */}
    </>
  )
}
