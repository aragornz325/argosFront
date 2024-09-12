import "../components/styleComponents/listaHistorial.style.css"

interface CardProps {
    plateNumber: string;
    driverName: string;
    date: string;
    confirm: boolean;
    vehicleBrand:string;
    vehicleModel:string;
  }

  const Historial: React.FC<CardProps> = ({ plateNumber, driverName, date, confirm,vehicleBrand,vehicleModel }) => {
    return (
      <div className="historial-card">
      <div className="px-2 py-2">
        <div className="font-bold text-xl mb-2">
        <span >{plateNumber}</span>  - 
          <span>{driverName}</span>  - 
          <span>{date}</span>  - 
          <span>{vehicleBrand}</span>  - 
          <span>{vehicleModel}</span>  - 
          <span>{confirm ? "Confirmada" : "No Confirmada"}</span>
        </div>
      </div>
    </div>
    );
};

export default Historial;