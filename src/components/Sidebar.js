import React from "react";
import { Link } from "react-router-dom";
import { MenuTitle } from "../components/SidebarMenu";

import logotipo from "../assets/images/logotipo.jpg";

import {
   FaUserTie,
   FaUsers,
   FaPrayingHands,
   FaBook,
   FaCog,
} from "react-icons/fa";

import "../assets/styles/Sidebar.css";

import { FcHome } from "react-icons/fc";
import { RiCalendarEventLine } from "react-icons/ri";
import { BsFillHouseFill } from "react-icons/bs";
import { BiBuildingHouse } from "react-icons/bi";

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
         <div className="menu-area">
            <Link to="/">
               <MenuTitle title="home" icon={<FcHome size={iconSize} />} />
            </Link>

            <Link to="/meetings">
               <MenuTitle title="reuniões" icon={<FaUsers size={iconSize} />} />
            </Link>
            {/*}
            <MenuItem title="Cadastro" />
            <MenuItem title="Consulta" />
            {*/}

            <Link to="/preletores">
               <MenuTitle
                  title="preletores"
                  icon={<FaUserTie size={iconSize} />}
               />
            </Link>

            <Link to="/regionais">
               <MenuTitle
                  title="regionais"
                  icon={<BiBuildingHouse size={iconSize} />}
               />
            </Link>

            <Link to="/AssocLocais">
               <MenuTitle
                  title="associações locais"
                  icon={<BsFillHouseFill size={iconSize} />}
               />
            </Link>

            <Link to="/events">
               <MenuTitle
                  title="eventos"
                  icon={<RiCalendarEventLine size={iconSize} />}
               />
            </Link>

            <MenuTitle
               title="orações"
               icon={<FaPrayingHands size={iconSize} />}
            />
            <Link to="/books">
               <MenuTitle title="livraria" icon={<FaBook size={iconSize} />} />
            </Link>
            <MenuTitle title="configurações" icon={<FaCog size={iconSize} />} />
         </div>
      </div>
   );
}
