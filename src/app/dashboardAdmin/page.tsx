'use client';
import React from "react";
import "../dashboardAdmin/style.css";
import "../../app/globals.css"

import SideBar from "./component/sidebar/sideBar";
import ProfileBar from "../dashboardAdmin/component/profile/profile";
import NuevasMultas from "./component/nuevosMultas/nuevasMultas";


import ThemeToggle from "@/components/modoDarkToggle";


const DashAdminPage = () => {
  return (
    <div className="body custom-gradient text-foreground">
      <div className="contenedor">
        <SideBar />
        <div className="alineacionLateral">
          <div>
            <ThemeToggle />
          </div>
          <ProfileBar />
          <div className="positionNewMultas divColor divBorde">
            <NuevasMultas/>
          </div>
          
          <div className="posicionDiv divBorde divColor">
            <h1>Novedades</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashAdminPage;
