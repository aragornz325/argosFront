"use client"
import React, { useEffect, useState } from "react";
import Historial from "@/components/listaHistorial";
import { fetchMultas } from "../dashboardAdmin/querysMultas/multas.querys";

import ModalComponent from "@/components/modalCard"; // Si también quieres un modal aquí

interface Multa {
  plateNumber: string;
  driverName: string;
  date: string;
  confirm: boolean;
  vehicleBrand: string;
  vehicleModel: string;
}

const HistorialMultas: React.FC = () => {
  const [multas, setMultas] = useState<Multa[] | null>(null);
  const [selectedMulta, setSelectedMulta] = useState<Multa | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getMultas = async () => {
      try {
        const data: Multa[] = await fetchMultas(); // Obtén todas las multas
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

  if (multas === null) {
    return (
      <div>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontSize: "1px" }}>
        {multas.map((multa, index) => (
          <div key={index} onClick={() => handleCardClick(multa)}>
            <Historial
              plateNumber={multa.plateNumber}
              driverName={multa.driverName}
              date={multa.date}
              confirm={multa.confirm}
              vehicleBrand={multa.vehicleBrand}
              vehicleModel={multa.vehicleModel}
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
  );
};

export default HistorialMultas;

