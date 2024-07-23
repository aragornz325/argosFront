import React from "react";
import Card from "../../components/minCard";
import MaxCard from "@/components/maxCard";  
import "../dashboardAdmin/style.css"


const DashAdminPage = () => {
  return (
    <div className="fontColor">
      <h1>DASHBOARD ADMIN</h1>
      
      <div className="cards-container">
        <Card
          plateNumber="aaa123"
          infractionCode="1-MalEstacionado-2"
          driverName="Santiago Collaud"
          photoUrl="https://via.placeholder.com/150"
          date="2024-07-13"
          confirm={true}
        />
      </div>

      <div className="flex justify-center items-center min-h-screen">
        <MaxCard 
          plateNumber="aaa123"
          createdAt="2024-06-22"
          location="Hasenkamp"
          vehicleBrand="Cadillac"
          vehicleModel="Fiorino"
          modelYear="2018"
          color="Azul"
          typeOfService="Uso Comercial"
          infractionCode="123456"
          lawArticleNumbre="555bis"
          observation="Cosa cosita coson"
          driverLicenseNumber= "951753"
          driverAddress="Calle falsa 123"
          driverPhone= "3435111222"
          driverMail="rodrigo.m.quintero@gmail.com"
          driverName="Constantino"
          photoUrl="https://res.cloudinary.com/do5hovkvl/image/upload/v1719022137/argos/todb0chdlgyy6zkmd2dz.jpg"
          confirm="true"
          firstName="Rodrigo Martin"
          lastName="Quintero"
          latitude={-31.75}
          longitude={-60.54}
        ></MaxCard>
      </div>
    
    </div>
    
  );
}

export default DashAdminPage;