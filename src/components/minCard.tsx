import "../components/styleComponents/Card.style.css"

interface CardProps {
    plateNumber: string;
    infractionCode: string;
    driverName:String
    photoUrl: string;
    date:string;
    confirm:boolean;
  }
  
  const Card: React.FC<CardProps> = ({ plateNumber, infractionCode, driverName,photoUrl,date,confirm }) => {
    return (
      <div className="cardContainer">
      <div className="max-w-sm rounded overflow-hidden shadow-lg titulo">
        <img className="w-full" src={photoUrl} alt={plateNumber} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{plateNumber}</div>
          <p className="text-gray-700 text-base">
            {infractionCode}
          </p>
          <div className="text-gray-700 text-base">
          {driverName}
          </div>
          <div className="text-gray-700 text-base">
          {date}
          </div>
          <div className="text-gray-700 text-base titulo">
            {confirm}
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="button">Ver Mas</button>
        </div>
      </div>
      </div>
    );
  }
  
  export default Card;

