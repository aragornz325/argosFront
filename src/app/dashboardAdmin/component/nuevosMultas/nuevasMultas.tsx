"use client"
import React, { useEffect, useState } from "react";
import Card from "../../../../components/minCard";
import { fetchMultas } from "../../querysMultas/multas.querys";
import "../nuevosMultas/nuevasMultas.style.css"

interface Multa {
  plateNumber: string;
  driverName: string;
  photoURL: string;
  date: string;
  confirm: boolean;
}

const NuevasMultas: React.FC = () => {
    const [multas, setMultas] = useState<Multa[]>([]); // Tipado de useState

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
    
    return (
        <div className="gridContainer">
          {multas.map((multa, index) => {
            //console.log(`photoUrl de multa ${index}:`, multa.photoUrl); // Agrega este console.log
            return (
              <Card
                key={index}
                plateNumber={multa.plateNumber}
                driverName={multa.driverName}
                photoURL={multa.photoURL}
                date={multa.date}
                confirm={multa.confirm}
              />
            );
          })}
        </div>
      );
    };

export default NuevasMultas;