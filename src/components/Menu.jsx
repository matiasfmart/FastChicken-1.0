import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../context/Provider';
import { Modal, Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

export const Menu = ({menuData}) => {
  
  const { addItemMenu, getItemsMenu } =  useContext(cartContext);
  const [showModal, setShowModal] = useState(false);

  const [valueDrink, setValueDrink] = useState([]);
  const [valueDish, setValueDish] = useState([]);

  const handleChangeDrink = (val) => {
    setValueDrink(val);
  }
  const handleChangeDish = (val) => {
    setValueDish(val);
  }

  // useEffect(() => {
  //   console.log(valueDrink);
  //   console.log(valueDish);
  // }, [valueDrink, valueDish])


  function handleClose(){
     setShowModal(false);
  };

  function handleShow(){ setShowModal(true) };

  function addItem(){
    const item = {
      "id": menuData.id,
      "type": menuData.type,
      "name": menuData.name,
      "dish": valueDish,
      "drink": valueDrink,
      "price": menuData.price
    }
    console.log(item);
    addItemMenu(item);
    handleClose();
  }

  return (
    <div className="col-md-4 mt-4">
      <button className='btn-menu py-3 px-2 btn btn-outline-primary' type="button" onClick={handleShow}>
          <div className="container">
            <h5 className='title-menu'>{menuData.name}</h5>
            <div className="row">
              <div className="col-12">
                <h6 className='text-muted'><small>{menuData.description}</small></h6>
              </div>
            </div>
          </div>
      </button>

      <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{menuData.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className='p-4'>
            <div className='row mb-4'>
              <h2 className='mb-4'>Bebida</h2>
              <ToggleButtonGroup type="radio" name="optionsDrink" value={valueDrink} onChange={handleChangeDrink}>
                <ToggleButton className="mx-1 py-2" id="tbg-radio-1" value={"Coca"}>
                  <h5 className='title-menu'>Coca</h5>
                </ToggleButton>
                <ToggleButton className="mx-1 py-2" id="tbg-radio-2" value={"Sprite"}>
                    <h5 className='title-menu'>Sprite</h5>
                </ToggleButton>
                <ToggleButton className="mx-1 py-2" id="tbg-radio-3" value={"Fanta"}>
                    <h5 className='title-menu'>Fanta</h5>
                </ToggleButton>
                <ToggleButton className="mx-1 py-2" id="tbg-radio-4" value={"Paso toros"}>
                    <h5 className='title-menu'>Paso</h5>
                </ToggleButton>
              </ToggleButtonGroup>
            </div>

            <div className='row'>
              <h2 className='mb-4'>Guarnicion</h2>
              <ToggleButtonGroup type="radio" name="optionsDish" value={valueDish} onChange={handleChangeDish}>
                <ToggleButton className="mx-1 py-2" id="tbg-radio-5" value={"Arroz"}>
                  <h5 className='title-menu'>Arroz</h5>
                </ToggleButton>
                <ToggleButton className="mx-1 py-2" id="tbg-radio-6" value={"Ensalada"}>
                    <h5 className='title-menu'>Ensalada</h5>
                </ToggleButton>
              </ToggleButtonGroup>
            </div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
            <Button variant="primary" onClick={addItem}>Agregar</Button>
          </Modal.Footer>
      </Modal>
    </div> 
  )
}
