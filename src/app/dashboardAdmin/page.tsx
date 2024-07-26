import React from "react";
import Card from "../../components/minCard";
import MaxCard from "@/components/maxCard";  
import "../dashboardAdmin/style.css"

import SideBar from "./component/sidebar/sideBar";
import ProfileBar from "../dashboardAdmin/component/profile/profile"
import NuevasMultas from "./component/nuevosMultas/nuevasMultas";

const DashAdminPage = () => {
  return (
    
    <div className="body contenedor alineacionLateral ">
      <SideBar></SideBar>
      <ProfileBar></ProfileBar>
      <div className="positionNewMultas divColor flex flex-wrap gap-4 mt-4" id="multasSinVerificar">
        <NuevasMultas/>
        <NuevasMultas/>
        <NuevasMultas/>
        <NuevasMultas/>
        <NuevasMultas/>
      </div>
    </div>
    
  );
}

export default DashAdminPage;