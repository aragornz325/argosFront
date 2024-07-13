import "../app/styleComponents/style.css"

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    date:string;
    confirm:boolean;
  }
  
  const Card: React.FC<CardProps> = ({ title, description, imageUrl,date,confirm }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg titulo">
        <img className="w-full" src={imageUrl} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {description}
          </p>
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
    );
  }
  
  export default Card;

