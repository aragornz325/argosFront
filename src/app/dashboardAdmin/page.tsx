import React from "react";
import Card from "../../components/card";  // Ajusta la ruta si es necesario

const DashAdminPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card 
        title="Santiago Collaud"
        description="Mal estacionado"
        imageUrl="https://via.placeholder.com/150"
        date="20/12/2023"
        confirm={false}
      />
    </div>
  );
}

export default DashAdminPage;