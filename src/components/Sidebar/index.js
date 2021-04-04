import React from 'react';
import { Link } from 'react-router-dom';
import { MenuTitle } from '../../components/SidebarMenu';

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
} from 'react-icons/fc';
//import { RiCalendarEventLine } from 'react-icons/ri';
import { BsFillHouseFill } from 'react-icons/bs';
//import { BiBuildingHouse } from 'react-icons/bi';

export function Sidebar() {
   const iconSize = 36;
   const iconSizeFc = 36;
   const iconBgColor = '#dda';

   return (
      <Container>
         <MenuArea>
            <Link to="/">
               <MenuTitle
                  title="home"
                  icon={
                     <FcHome
                        style={{
                           border: '2px solid #000',
                           backgroundColor: iconBgColor,
                           borderRadius: '5px',
                        }}
                        size={iconSizeFc}
                     />
                  }
               />
            </Link>

            <Link to="/meetings">
               <MenuTitle
                  title="reuniões"
                  icon={
                     <FcConferenceCall
                        style={{
                           border: '2px solid #000',
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
                           border: '2px solid #000',
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
                           border: '2px solid #000',
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
                           border: '2px solid #000',
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
                  title="produtos em estoque"
                  icon={
                     <FaShopify
                        style={{
                           color: '#555',
                           border: '2px solid #000',
                           backgroundColor: iconBgColor,
                           borderRadius: '5px',
                           padding: '3px',
                        }}
                        size={iconSize}
                     />
                  }
               />
            </Link>

            <Link to="/books">
               <MenuTitle
                  title="catálogo de produtos"
                  icon={
                     <FaBook
                        style={{
                           color: '#555',
                           border: '2px solid #000',
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
                           border: '2px solid #000',
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
                        border: '2px solid #000',
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
