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
        <div className="container">
             <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {plateNumber}
          </div>
          <div className="text-gray-5 text-base nombre_driver">
            {driverName}
          </div>
          <div className="text-gray-700 text-base fecha">
            {date}
          </div>
          <div className="text-gray-700 text-base fecha">
            {vehicleBrand}
          </div>
          <div className="text-gray-700 text-base fecha">
            {vehicleModel}
          </div>
          <div className="text-gray-700 text-base titulo">
            {confirm ? "Confirmada" : "No Confirmada"}
          </div>
        </div>
        </div>
    );
};

export default Historial;