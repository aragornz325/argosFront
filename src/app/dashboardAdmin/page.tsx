'use client';
import React, { useState } from "react";
import "../dashboardAdmin/style.css";
import "../../app/globals.css"

import NuevasMultas from "./component/nuevosMultas/nuevasMultas";
import HistorialMultas from "../historialMultas/page";
import LogoutButton from "@/components/logOutButton";
import PanelAdmin from "./component/panelDeControl/panel";
import UserAdmin from "./component/administrarUsuarios/usuarios";

import ThemeToggle from "@/components/modoDarkToggle";

const DashAdminPage = () => {
 
  const [activeSection, setActiveSection] = useState("nuevasMultas"); // Estado para controlar la sección activa

  return (
    <div className="flex h-screen bg-white dark:bg-darkBlue text-black dark:text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-highlight p-4 border-r border-gray-300">
        <h2 className="text-xl font-bold mb-6 dark:text-white">👋 ¡Bienvenido, administrador!</h2>
        <nav className="space-y-2">
          <button 
            className="flex items-center space-x-2 p-2 w-full text-white hover:bg-blue-600 rounded dark:invert"
            onClick={() => setActiveSection("nuevasMultas")}
            >
            <span>🏠</span>
            <span>Nuevas Multas</span>
          </button>
          <button 
            className="flex items-center space-x-2 p-2 w-full text-white hover:bg-blue-600 rounded dark:invert"
            onClick={() => setActiveSection("historialMultas")}
            >
            <span>📜</span>
            <span>Historial de Multas</span>
          </button>
          <button 
            className="flex items-center space-x-2 p-2 w-full text-white hover:bg-blue-600 rounded dark:invert"
            onClick={() => setActiveSection("panelAdmin")}
            >
            <span>📊</span>
            <span>Panel de Control</span>
          </button>
          <button className="flex items-center space-x-2 p-2 w-full text-white hover:bg-blue-600 rounded dark:invert">
            <span>⚙️</span>
            <span>Configuración del Sitio</span>
          </button>
          <button className="flex items-center space-x-2 p-2 w-full text-white hover:bg-blue-600 rounded dark:invert"
          onClick={() => setActiveSection("userAdmin")}
          >
            <span>👤</span>
            <span>Administrar Usuarios</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-cardBackground dark:white overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8 text-white">
          <div className="text-2xlx">¡Bienvenido al Sistema Argos!</div>
            <div className="flex items-center grid-cols-3">
              <div className="1/3 mx-2">
                <button className="text-sm text-white ">🌐 Español</button>
              </div>
              <div className="2/3 mx-2 text-white">
                <LogoutButton />
              </div>
              <div className="3/3 mx-2">
                <ThemeToggle />
              </div>
          </div>
        </header>

        {/* Content Sections */}
        <section>
          {/* Renderizado condicional según la sección activa */}
          {activeSection === "nuevasMultas" ? 
          (
          <div>
            <NuevasMultas />
          </div>
          ) : activeSection === "historialMultas" ? 
          (
          <div>  
            <HistorialMultas/>
          </div>
          ) : activeSection === "panelAdmin" ? 
          (<div>
            <PanelAdmin/>
          </div>
          ): activeSection === "userAdmin" ?  
          (
            <div>
              <UserAdmin/>
            </div>
          ): null }
        </section>
      </main>
    </div>
  );
};

export default DashAdminPage;
