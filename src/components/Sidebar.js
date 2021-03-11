import React from "react";
import logotipo from "../assets/images/logotipo.jpg";

import {
   FaUserTie,
   FaUsers,
   FaPrayingHands,
   FaBook,
   FaCog,
} from "react-icons/fa";

import { menu_area, menu_item } from "../assets/styles/Sidebar";

import "../assets/styles/Sidebar.css";

import { FcHome } from "react-icons/fc";
import { RiCalendarEventLine } from "react-icons/ri";
import { BsFillHouseFill } from "react-icons/bs";
import { BiBuildingHouse } from "react-icons/bi";

function MenuTitle({ title, icon }) {
   return (
      <div className="menu-title align-items-center">
         {icon}
         <div style={{ marginLeft: "15px" }}>{title.toUpperCase()}</div>
      </div>
   );
}

function MenuItem({ title, icon }) {
   return (
      <div style={menu_item}>
         <div>{title.toUpperCase()}</div>
      </div>
   );
}

export default function Sidebar() {
   const iconSize = 21;

   return (
      <div>
         <div className="logo-area">
            <div id="image-area">
               <img src={logotipo} width="98px" alt="" />
            </div>
            <div className="main_title_area">Associação local Vila Carrão</div>
         </div>
         <div className="menu_area" style={menu_area}>
            <MenuTitle title="home" icon={<FcHome size={iconSize} />} />

            <MenuTitle title="reuniões" icon={<FaUsers size={iconSize} />} />
            {/*}
            <MenuItem title="Cadastro" />
            <MenuItem title="Consulta" />
            {*/}

            <MenuTitle
               title="preletores"
               icon={<FaUserTie size={iconSize} />}
            />
            <MenuTitle
               title="regionais"
               icon={<BiBuildingHouse size={iconSize} />}
            />
            <MenuTitle
               title="associações locais"
               icon={<BsFillHouseFill size={iconSize} />}
            />
            <MenuTitle
               title="eventos"
               icon={<RiCalendarEventLine size={iconSize} />}
            />
            <MenuTitle
               title="orações"
               icon={<FaPrayingHands size={iconSize} />}
            />
            <MenuTitle title="livraria" icon={<FaBook size={iconSize} />} />
            <MenuTitle title="configurações" icon={<FaCog size={iconSize} />} />
         </div>
      </div>
   );
}
