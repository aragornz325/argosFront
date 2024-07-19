import "../components/styleComponents/maxCard.style.css"

interface CardProps {
    plateNumber: string;
    createdAt:string;
    location:string;
    vehicleBrand:string;
    vehicleModel:string;
    modelYear:string;
    color:string;
    typeOfService:string;
    infractionCode:string;
    lawArticleNumbre:string;
    observation:string;
    driverLicenseNumber:string;
    driverAddress:string;
    driverPhone:string;
    driverMail:string;
    driverName:String
    photoUrl: string;
    confirm:string;
    userId:string;
  }
  
  const MaxCard: React.FC<CardProps> = ({ 
    plateNumber,
    createdAt,
    location,
    vehicleBrand,
    vehicleModel,
    modelYear,
    color,
    typeOfService,
    infractionCode,
    lawArticleNumbre,
    observation,
    driverLicenseNumber,
    driverAddress,
    driverPhone,
    driverMail,
    driverName,
    photoUrl,
    confirm,
    userId,
   }) => {
    return (
    <div className="cardContainerMax">
      <div className="rounded overflow-hidden shadow-lg titulo">
        <img className="w-80 h-100" src={photoUrl} alt={plateNumber}/>
        <div className="px-6 py-4">
            <div>
                <h1>Patente</h1>
                <div className="font-bold text-xl mb-2 patente">{plateNumber}</div>
                <br />
            </div>
          
          <div className="text-gray-700 text-base">
          <h1>Fecha:</h1>
          {createdAt}
          </div>
          <br />
          <div className="grid grid-cols-2 gap-4">
            <div>
                <h1 className="titulos">Datos del Vehiculo</h1>
                <div>
                    <h2>Marca:</h2>
                    <div className="text-gray-700 text-base sizeFont">{vehicleBrand}</div>
                </div>
                <div>
                    <h2>Modelo:</h2>
                    <div className="text-gray-700 text-base sizeFont">{vehicleModel}</div>
                </div>
                <div>
                    <h2>Año:</h2>
                    <div className="text-gray-700 text-base sizeFont">{modelYear}</div>
                </div>
                
                <div>
                    <h2>Ubicacion:</h2>
                    <div className="text-gray-700 text-base sizeFont">{location}</div>
                </div>
                
                <div>
                    <h2>Color:</h2>
                    <div className="text-gray-700 text-base sizeFont">{color}</div>
                </div>
                
                <div>
                    <h2>Tipo de Servicio:</h2>
                    <div className="text-gray-700 text-base sizeFont">{typeOfService}</div>
                </div>
            </div>   
            <div>    
                <h1 className="titulos">Datos del Propietario</h1>
                <div>
                    <h2>Licencia:</h2>
                    <div className="text-gray-700 text-base sizeFont">{driverLicenseNumber}</div>
                </div>
                <div>
                    <h2>Nombre:</h2>
                    <div className="text-gray-700 text-base sizeFont">{driverName}</div>
                </div>
                
                <div>
                    <h2>Mail:</h2>
                    <div className="text-gray-700 text-base sizeFont">{driverMail}</div>
                </div>
                
                <div>
                    <h2>Telefono:</h2>
                    <div className="text-gray-700 text-base sizeFont">{driverPhone}</div>
                </div>
                
                <div>
                    <h2>Direccion:</h2>
                    <div className="text-gray-700 text-base sizeFont">{driverAddress}</div>
                </div> 
                </div>
            </div>
            <br />
          <h1 className="titulos">Datos de la infraccion</h1>
          <div>
            <h2>Articulo de ley de Transito</h2>
            <div className="text-gray-700 text-base sizeFont">{lawArticleNumbre}</div>
            <br />
          </div>
          
          <div>
            <h2>Observacion</h2>
            <div className="text-gray-700 text-base sizeFont">{observation}</div>
            <br />
          </div>

          <div>
            <h2>Codigo de infraccion</h2>
            <div className="text-gray-700 text-base sizeFont">{infractionCode}</div>
            <br />
          </div>
        

          <h1 className="titulos">Usuario</h1>
          <div>
            <h2>Codigo Inspector</h2>
            <p className="text-gray-700 text-base sizeFont">{userId}</p>
            <br />
          </div>
          <div>
            <h2>Confirmada</h2>
            <div className="text-gray-700 text-base titulo">{confirm}</div>
            <br />
          </div>
          
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="button">Remitir</button>
        </div>
      </div>
    </div>
    );
  }

  export default MaxCard;