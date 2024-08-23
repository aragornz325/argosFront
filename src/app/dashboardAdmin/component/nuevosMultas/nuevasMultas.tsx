"use client"
import React, { useEffect, useState } from "react";
import Card from "../../../../components/minCard";
import { fetchMultas } from "../../querysMultas/multas.querys";

interface Multa {
  plateNumber: string;
  driverName: string;
  photoUrl: string;
  date: string;
  confirm: boolean;
}

const NuevasMultas: React.FC = () => {
    const [multas, setMultas] = useState<Multa[]>([]); // Tipado de useState

    useEffect(() => {
        const getMultas = async () => {
            try {
                const data: Multa[] = await fetchMultas(); // Tipado del resultado de fetchMultas
                setMultas(data);
            } catch (error) {
                console.error("Error al obtener multas", error);
            }
        };

        getMultas();
    }, []);
  return (
    <div>
      {multas.map((multa, index) => (
        <Card
          key={index}
          plateNumber={multa.plateNumber}
          driverName={multa.driverName}
          photoUrl={multa.photoUrl}
          date={multa.date}
          confirm={multa.confirm}
        />
      ))}
    </div>
  );
};

export default NuevasMultas;