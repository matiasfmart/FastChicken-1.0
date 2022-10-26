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
        <Modal.Title className="lead">{item.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        <div className="row mb-4">
          <h4 className="mb-3 fw-bold">Bebida</h4>
          <ToggleButtonGroup type="radio" name="optionsDrink" value={valueDrink} onChange={handleChangeDrink}>
            <ToggleButton className="mx-1 py-2 shadow-sm rounded" id="tbg-radio-1" variant="outline-primary" value={"Coca"}>
              <h5 className="title-menu">Coca</h5>
            </ToggleButton>
            <ToggleButton className="mx-1 py-2 shadow-sm rounded" id="tbg-radio-2" variant="outline-primary" value={"Sprite"}>
              <h5 className="title-menu">Sprite</h5>
            </ToggleButton>
            <ToggleButton className="mx-1 py-2 shadow-sm rounded" id="tbg-radio-3" variant="outline-primary" value={"Fanta"}>
              <h5 className="title-menu">Fanta</h5>
            </ToggleButton>
            <ToggleButton className="mx-1 py-2 shadow-sm rounded" id="tbg-radio-4" variant="outline-primary" value={"Paso toros"}>
              <h5 className="title-menu">Paso</h5>
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        {
          item.type == "po" &&
          <>
            <hr/>
            <div className="row">
              <h4 className="mb-3 fw-bold">Guarnicion</h4>
              <ToggleButtonGroup type="radio" name="optionsDish" value={valueDish} onChange={handleChangeDish}>
                <ToggleButton className="mx-1 py-2 shadow-sm rounded" id="tbg-radio-5" variant="outline-primary" value={"Arroz"}>
                  <h5 className="title-menu">Arroz</h5>
                </ToggleButton>
                <ToggleButton className="mx-1 py-2 shadow-sm rounded" id="tbg-radio-6" variant="outline-primary" value={"Ensalada"}>
                  <h5 className="title-menu">Ensalada</h5>
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </>
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
