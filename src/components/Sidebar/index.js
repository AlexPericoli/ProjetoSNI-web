import React from 'react';
import { Link } from 'react-router-dom';
import { MenuTitle } from '../../components/SidebarMenu';

import {
   FaUserTie,
   FaUsers,
   FaPrayingHands,
   FaBook,
   FaCog,
} from 'react-icons/fa';

//import "../assets/styles/Sidebar.css";

import { LogoArea, LogoTitleArea, MenuArea } from './styles';
import { FcHome } from 'react-icons/fc';
import { RiCalendarEventLine } from 'react-icons/ri';
import { BsFillHouseFill } from 'react-icons/bs';
import { BiBuildingHouse } from 'react-icons/bi';

export function Sidebar() {
   const iconSize = 21;

   return (
      <div>
         <LogoArea>
            <LogoTitleArea>Associação local Vila Carrão</LogoTitleArea>
         </LogoArea>

         <MenuArea>
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

            <Link to="/assoc_locais/1">
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
         </MenuArea>
      </div>
   );
}
