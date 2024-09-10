"use client"
import React from "react"
import "../../app/globals.css"
import "../historialMultas/historial.style.css"

import SideBar from "../dashboardAdmin/component/sidebar/sideBar"
import ProfileBar from "../dashboardAdmin/component/profile/profile";
import ThemeToggle from "@/components/modoDarkToggle";
import Historial from "@/components/listaHitorial"

import { fetchMultas } from "../dashboardAdmin/querysMultas/multas.querys"



interface Multa {
  plateNumber: string;
  driverName: string;
  date: string;
  confirm: boolean;
}

const HistorialMultas = () =>{
return(
    <div className="body custom-gradient text-foreground">
      <div className="contenedor">
        <SideBar />
        <div className="alineacionLateral">
          <div>
            <ThemeToggle />
          </div>
          <ProfileBar />
          <div className="positionNewMultas divColor divBorde">
          
          </div>
          
          {/*<div className="posicionDiv divBorde divPadding divColor">
            <h1>Novedades</h1>
          </div>*/}
        </div>
      </div>
    </div>
    );
};
export default HistorialMultas;