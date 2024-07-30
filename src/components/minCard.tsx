import "../components/styleComponents/Card.style.css"

interface CardProps {
    plateNumber: string;
    
    driverName:String
    photoUrl: string;
    date:string;
    confirm:boolean;
  }
  
  const Card: React.FC<CardProps> = ({ plateNumber, driverName,photoUrl,date,confirm }) => {
    return (
      <div className="cardContainer">
      <div className="max-w-sm rounded overflow-hidden shadow-lg titulo">
        <img className="w-full imgTamaño" src={photoUrl} alt={plateNumber}/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 patente">{plateNumber}</div>
          <div className="text-gray-700 text-base nombre">
          {driverName}
          </div>
          <div className="text-gray-700 text-base fecha">
          {date}
          </div>
          <div className="text-gray-700 text-base titulo">
            {confirm}
          </div>
        </div>
      </div>
      </div>
    );
  }
  
  export default Card;

