"use client";

import React, { useState, useEffect } from "react";
import "../dashboardAdmin/style.css";
import SideBar from "./component/sidebar/sideBar";
import ProfileBar from "../dashboardAdmin/component/profile/profile";
import NuevasMultas from "./component/nuevosMultas/nuevasMultas";
import "../../app/globals.css";

const DashAdminPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModePreference = localStorage.getItem('dark-mode');
    if (darkModePreference === 'enabled') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log("is dark mode:"+isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('dark-mode', 'enabled');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('dark-mode', 'disabled');
    }
  };

  return (
    <div className="body">
      <div className="contenedor ">
        <SideBar />
        <div className="alineacionLateral dark:bg-light-mode">
          <ProfileBar />
          <div className="positionNewMultas divColor dark:text-white" id="multasSinVerificar">
            <NuevasMultas />
          </div>
          <div className="posicionDiv divPadding divColor dark:text-black">
            <h1>Novedades</h1>
          </div>
        </div>
      </div>
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded"
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default DashAdminPage;

