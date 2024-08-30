import React from 'react';
import { Modal,Button } from 'react-bootstrap';
import MaxCard from './maxCard';

import 'bootstrap/dist/css/bootstrap.min.css';

interface ModalProps{
    show: boolean;
    handleClose: ()=> void;
    multaData: any;
}
const ModalComponent: React.FC<ModalProps> = ({ show, handleClose, multaData }) => {
    return (
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Detalle de la Multa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MaxCard {...multaData} /> {/* Pasa los datos a MaxCard */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  
  export default ModalComponent;