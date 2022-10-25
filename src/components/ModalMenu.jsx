import React from "react";
import { Modal, Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

export const ModalMenu = 
    (
        { handleClose, handleChangeDrink, handleChangeDish, addItem,
        showModal, valueDrink, valueDish, item }
    ) => 
{
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{item.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        <div className="row mb-4">
          <h2 className="mb-4">Bebida</h2>
          <ToggleButtonGroup type="radio" name="optionsDrink" value={valueDrink} onChange={handleChangeDrink}>
            <ToggleButton className="mx-1 py-2" id="tbg-radio-1" value={"Coca"}>
              <h5 className="title-menu">Coca</h5>
            </ToggleButton>
            <ToggleButton className="mx-1 py-2" id="tbg-radio-2" value={"Sprite"}>
              <h5 className="title-menu">Sprite</h5>
            </ToggleButton>
            <ToggleButton className="mx-1 py-2" id="tbg-radio-3" value={"Fanta"}>
              <h5 className="title-menu">Fanta</h5>
            </ToggleButton>
            <ToggleButton className="mx-1 py-2" id="tbg-radio-4" value={"Paso toros"}>
              <h5 className="title-menu">Paso</h5>
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        {
          item.type == "po" &&
          <div className="row">
            <h2 className="mb-4">Guarnicion</h2>
            <ToggleButtonGroup type="radio" name="optionsDish" value={valueDish} onChange={handleChangeDish}>
              <ToggleButton className="mx-1 py-2" id="tbg-radio-5" value={"Arroz"}>
                <h5 className="title-menu">Arroz</h5>
              </ToggleButton>
              <ToggleButton className="mx-1 py-2" id="tbg-radio-6" value={"Ensalada"}>
                <h5 className="title-menu">Ensalada</h5>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={addItem}>
          Agregar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
