import React from "react";
import logotipo from "../assets/images/logotipo.jpg";

import { FaUserFriends } from "react-icons/fa";

import {
   area_sidebar,
   main_title_area,
   logo_area,
   menu_area,
   menu_item,
   menu_title,
} from "./styles/Sidebar";

function MenuTitle({ title }) {
   return (
      <div id="menu-title" style={menu_title}>
         <FaUserFriends size="20" color="#000" />
         <div style={{ marginLeft: "10px", color: "#000" }}>
            {title.toUpperCase()}
         </div>
      </div>
   );
}

function MenuItem({ title }) {
   return (
      <div id="menu-item" style={menu_item}>
         <div>{title}</div>
      </div>
   );
}

export default function Sidebar() {
   return (
      <div style={area_sidebar}>
         <div style={logo_area}>
            <div id="image-area">
               <img src={logotipo} width="98px" alt="" />
            </div>
            <div style={main_title_area}>Associação local Vila Carrão</div>
         </div>
         <div style={menu_area}>
            <MenuTitle title="reuniões" />
            <MenuItem title="Cadastro" />
            <MenuItem title="Consulta" />

            <MenuTitle title="PRELETORES" />
            <MenuItem title="Cadastro" />
            <MenuItem title="Consulta" />
         </div>
      </div>
   );
}
