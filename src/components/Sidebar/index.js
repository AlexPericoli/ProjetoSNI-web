import React from 'react';
import { Link } from 'react-router-dom';
import { MenuTitle, MenuItem } from '../../components/SidebarMenu';

import {
   //FaUserTie,
   //FaUsers,
   FaShopify,
   FaPrayingHands,
   FaBook,
   //FaCog,
} from 'react-icons/fa';

//import "../assets/styles/Sidebar.css";

import { Container, MenuArea } from './styles';
import {
   FcHome,
   FcConferenceCall,
   FcBusinessman,
   FcDepartment,
   FcCalendar,
   FcAutomatic,
   FcBullish,
} from 'react-icons/fc';
//import { RiCalendarEventLine } from 'react-icons/ri';
import { BsFillHouseFill } from 'react-icons/bs';
//import { BiBuildingHouse } from 'react-icons/bi';

export function Sidebar() {
   const iconSize = 32;
   const iconSizeFc = 32;
   const iconBgColor = '#dda';

   return (
      <Container>
         <MenuArea>
            <Link to="/PageContent">
               <MenuTitle
                  title="home"
                  icon={
                     <FcHome
                        style={{
                           backgroundColor: iconBgColor,
                           borderRadius: '5px',
                        }}
                        size={iconSizeFc}
                     />
                  }
               />
            </Link>

            <MenuItem title="livraria" />

            <Link to="/catalogo">
               <MenuTitle
                  title="catálogo de produtos"
                  icon={
                     <FaBook
                        style={{
                           color: '#555',
                           //backgroundColor: iconBgColor,
                           backgroundColor: iconBgColor,
                           borderRadius: '5px',
                           padding: '3px',
                        }}
                        size={iconSize}
                     />
                  }
               />
            </Link>

            <Link to="/pedidos">
               <MenuTitle
                  title="consultar pedidos"
                  icon={
                     <FaShopify
                        style={{
                           color: '#555',
                           backgroundColor: iconBgColor,
                           borderRadius: '5px',
                           padding: '3px',
                        }}
                        size={iconSize}
                     />
                  }
               />
            </Link>

            <Link to="/vendas">
               <MenuTitle
                  title="vendas"
                  icon={
                     <FcBullish
                        style={{
                           color: '#555',
                           backgroundColor: iconBgColor,
                           borderRadius: '5px',
                           padding: '3px',
                        }}
                        size={iconSize}
                     />
                  }
               />
            </Link>

            <MenuItem title="consultas" />

            <Link to="/meetings">
               <MenuTitle
                  title="reuniões"
                  icon={
                     <FcConferenceCall
                        style={{
                           backgroundColor: iconBgColor,
                           borderRadius: '5px',
                        }}
                        size={iconSizeFc}
                     />
                  }
               />
            </Link>

            <Link to="/preletores">
               <MenuTitle
                  title="preletores"
                  icon={
                     <FcBusinessman
                        style={{
                           backgroundColor: iconBgColor,
                           borderRadius: '5px',
                        }}
                        size={iconSizeFc}
                     />
                  }
               />
            </Link>

            <Link to="/regionais">
               <MenuTitle
                  title="regionais"
                  icon={
                     <FcDepartment
                        style={{
                           backgroundColor: iconBgColor,
                           borderRadius: '5px',
                        }}
                        size={iconSizeFc}
                     />
                  }
               />
            </Link>

            <Link to="/assoc_locais/1">
               <MenuTitle
                  title="associações locais"
                  icon={
                     <BsFillHouseFill
                        style={{
                           color: '#555',
                           backgroundColor: iconBgColor,
                           borderRadius: '5px',
                           padding: '3px',
                        }}
                        size={iconSize}
                     />
                  }
               />
            </Link>
            <Link to="/events">
               <MenuTitle
                  title="eventos"
                  icon={
                     <FcCalendar
                        style={{
                           backgroundColor: iconBgColor,
                           borderRadius: '5px',
                        }}
                        size={iconSizeFc}
                     />
                  }
               />
            </Link>

            <MenuTitle
               title="orações"
               icon={
                  <FaPrayingHands
                     style={{
                        color: '#555',
                        backgroundColor: iconBgColor,
                        borderRadius: '5px',
                        padding: '3px',
                     }}
                     size={iconSize}
                  />
               }
            />

            <MenuTitle
               title="configurações"
               icon={
                  <FcAutomatic
                     style={{
                        border: '2px solid #000',
                        backgroundColor: iconBgColor,
                        borderRadius: '5px',
                     }}
                     size={iconSizeFc}
                  />
               }
            />
         </MenuArea>
      </Container>
   );
}
