"use client"
import React, { useEffect, useState } from "react";
import Card from "../../../../components/minCard";
import { fetchMultas } from "../../querysMultas/multas.querys";
import "../nuevosMultas/nuevasMultas.style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalComponent from "@/components/modalCard";
import { boolean } from "yup";
import { button } from "@nextui-org/react";


interface Multa {
  plateNumber: string;
  driverName: string;
  photoURL: string;
  date: string;
  confirm: boolean;
}

const NuevasMultas: React.FC = () => {
  const [multas, setMultas] = useState<Multa[] | null>(null);
  const [selectedMulta, setSelectedMulta] = useState<Multa | null>(null);
  const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const getMultas = async () => {
            try {
                const data: Multa[] = await fetchMultas(); // Tipado del resultado de fetchMultas
                //console.log("Datos obtenidos:", data);
                setMultas(data);
            } catch (error) {
                console.error("Error al obtener multas", error);
            }
        };

        getMultas();
   
    }, []);

    const handleCardClick = (multa: Multa) => {
      setSelectedMulta(multa);
      setShowModal(true);
    };

    const handleCloseModal = () => {
      setShowModal(false);
      setSelectedMulta(null);
    };

    if(multas===null){
      return (
        <div className="d-flex justify-content-center align-items-center loaderContainer">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      );
    }

    return (
      <div>
        <h3>Multas no confirmadas</h3>
      <div className="gridContainer">
        {multas.map((multa, index) => (
          <div key={index} onClick={() => handleCardClick(multa)}>
            <Card
              plateNumber={multa.plateNumber}
              driverName={multa.driverName}
              photoURL={multa.photoURL}
              date={multa.date}
              confirm={multa.confirm}
            />
          </div>
        ))}
        {selectedMulta && (
          <ModalComponent 
            show={showModal} 
            handleClose={handleCloseModal} 
            multaData={selectedMulta} 
            darkMode={true}
          />
        )}
      </div>
    </div>
    );
  };
  
  export default NuevasMultas;