import React from 'react';
import { Modal,Button } from 'react-bootstrap';
import MaxCard from './maxCard';
import '../components/styleComponents/modal.style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

interface ModalProps{
    show: boolean;
    handleClose: ()=> void;
    multaData: any;
}
const ModalComponent: React.FC<ModalProps> = ({ show, handleClose, multaData }) => {
    if(multaData===null){
        return (
            <div className="d-flex justify-content-center align-items-center loaderContainer">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
            </div>
          );
      }
    
    return (
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton className='modalTitle'>
          <Modal.Title>Detalle de la Multa</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalBody'>
          <MaxCard {...multaData} /> {/* Pasa los datos a MaxCard */}
        </Modal.Body>
        <Modal.Footer className='modalFooter'>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  
  export default ModalComponent;