import React from 'react';
import { Modal,Button } from 'react-bootstrap';
import MaxCard from './maxCard';
import '../components/styleComponents/modal.style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


interface ModalProps{
    show: boolean;
    handleClose: ()=> void;
    multaData: any;
    darkMode: boolean;  // popp dark mode
}
const ModalComponent: React.FC<ModalProps> = ({ show, handleClose, multaData,darkMode }) => {
    if(multaData===null){
        return (
            <div>
                <span>Cargando...</span>
            </div>
          );
      }
    
    return (
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton className='dark modalTitle'>
          <Modal.Title>Detalle de la Multa</Modal.Title>
        </Modal.Header>
        <Modal.Body className='dark modalBody'>
          <MaxCard {...multaData} /> {/* Pasa los datos a MaxCard */}
        </Modal.Body>
        <Modal.Footer className='dark modalFooter'>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  
  export default ModalComponent;