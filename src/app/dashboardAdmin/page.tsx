'use client';
import React, { useState } from "react";
import "../dashboardAdmin/style.css";
import "../../app/globals.css"

import SideBar from "./component/sidebar/sideBar";
import ProfileBar from "../dashboardAdmin/component/profile/profile";
import NuevasMultas from "./component/nuevosMultas/nuevasMultas";
import HistorialMultas from "../historialMultas/page";
import LogoutButton from "@/components/logOutButton";


import ThemeToggle from "@/components/modoDarkToggle";

const DashAdminPage = () => {
 
  const [activeSection, setActiveSection] = useState("nuevasMultas"); // Estado para controlar la sección activa

  return (
    <div className="flex h-screen bg-darkBlue text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-highlight p-4 border-r border-gray-300">
        <h2 className="text-xl font-bold mb-6">👋 ¡Bienvenido, administrador!</h2>
        <nav className="space-y-2">
          <button 
            className="flex items-center space-x-2 p-2 w-full text-white hover:bg-blue-600 rounded"
            onClick={() => setActiveSection("nuevasMultas")}
            >
            <span>🏠</span>
            <span>Nuevas Multas</span>
          </button>
          <button 
            className="flex items-center space-x-2 p-2 w-full text-white hover:bg-blue-600 rounded"
            onClick={() => setActiveSection("historialMultas")}
            >
            <span>📜</span>
            <span>Historial de Multas</span>
          </button>
          <button className="flex items-center space-x-2 p-2 w-full text-white hover:bg-blue-600 rounded">
            <span>📊</span>
            <span>Panel de Control</span>
          </button>
          <button className="flex items-center space-x-2 p-2 w-full text-white hover:bg-blue-600 rounded">
            <span>⚙️</span>
            <span>Configuración del Sitio</span>
          </button>
          <button className="flex items-center space-x-2 p-2 w-full text-white hover:bg-blue-600 rounded">
            <span>👤</span>
            <span>Administrar Usuarios</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-cardBackground overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8 ">
          <div className="text-2xlx">¡Bienvenido al Sistema Argos!</div>
            <div className="flex items-center space-x-4">
              <button className="text-sm text-white">🌐 Español</button>
              <ThemeToggle />
              <LogoutButton />
          </div>
        </header>

        {/* Content Sections */}
        <section>
          {/* Renderizado condicional según la sección activa */}
          {activeSection === "nuevasMultas" ? (
          <div>
            <NuevasMultas />
          </div>
          ) : activeSection === "historialMultas" ? (
          <div>  
            <HistorialMultas/>
          </div>
          ) : null}
        </section>
      </main>
    </div>
  );
};

export default DashAdminPage;
