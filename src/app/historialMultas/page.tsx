"use client"
import React, { useEffect, useState } from "react";
import Historial from "@/components/listaHistorial";
import { fetchMultas } from "../dashboardAdmin/querysMultas/multas.querys";

import SideBar from "../dashboardAdmin/component/sidebar/sideBar";
import ProfileBar from "../dashboardAdmin/component/profile/profile";
import ThemeToggle from "@/components/modoDarkToggle";
import ModalComponent from "@/components/modalCard"; // Si también quieres un modal aquí

import "../historialMultas/historial.style.css"

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
      <div className="d-flex justify-content-center align-items-center loaderContainer">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="body custom-gradient text-foreground">
      <div className="contenedor">
        <SideBar />
        <div className="alineacionLateral">
          <ThemeToggle />
          <ProfileBar />
          <div className="positionNewMultas divColor divBorde">
            <span>
              <h3>Historial de Multas</h3>
            </span>
            <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorialMultas;

