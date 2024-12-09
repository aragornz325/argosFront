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

const ITEMS_PER_PAGE = 8; // Número de multas por página

const NuevasMultas: React.FC = () => {
  const [multas, setMultas] = useState<Multa[] | null>(null);
  const [selectedMulta, setSelectedMulta] = useState<Multa | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

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

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentMultas = multas ? multas.slice(startIndex, startIndex + ITEMS_PER_PAGE) : [];

  const handleNextPage = () => {
    if (multas && currentPage < Math.ceil(multas.length / ITEMS_PER_PAGE)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
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
      <div className="border w-full">
        <h3>Multas no confirmadas</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" >
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
      {/* Botones de navegación */}
      <div className="pagination-container flex justify-center">
        <button
          className="btn btn-primary m-1"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>Página {currentPage}</span>
        <button
          className="btn btn-primary m-1"
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(multas.length / ITEMS_PER_PAGE)}
        >
          Siguiente
        </button>
      </div>
    </div>
    );
  };
  
  export default NuevasMultas;