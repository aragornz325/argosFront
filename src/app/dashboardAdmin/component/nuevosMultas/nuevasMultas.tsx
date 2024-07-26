import React from "react";
import "../nuevosMultas/style.css"
import Card from "../../../../components/minCard";

const NuevasMultas=()=>{

    return(
        <div>
            <Card
            plateNumber="aaa123"
            infractionCode="1-MalEstacionado-2"
            driverName="Santiago Collaud"
            photoUrl="https://via.placeholder.com/150"
            date="2024-07-13"
            confirm={true}
            />
        </div>
    );
};

export default NuevasMultas;