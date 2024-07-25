import React from "react";
import Card from "../../components/minCard";
import MaxCard from "@/components/maxCard";  
import "../dashboardAdmin/style.css"
import SideBar from "./component/sidebar/sideBar";
import ProfileBar from "../dashboardAdmin/component/profile/profile"

const DashAdminPage = () => {
  return (
    <div className="body contenedor alineacionLateral  ">
      <SideBar></SideBar>
      <ProfileBar></ProfileBar>
    </div>
  );
}

export default DashAdminPage;