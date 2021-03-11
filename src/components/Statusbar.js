import React from "react";
import { useSelector } from "react-redux";

import {
   statusbar,
   statusbar_top_orange,
   statusbar_top_orange__title,
   statusbar_top_orange__info,
   statusbar_info__name,
   statusbar_info__regional,
   statusbar_icons,
   statubsar_bottom_green,
   statubsar_bottom_green__datetime,
} from "../assets/styles/Statusbar";

import { RiLogoutBoxLine, RiUser2Line } from "react-icons/ri";

export default function Statusbar() {
   const iconSize = 23;
   const authUser = useSelector((state) => state.usuarios.authUser);

   return (
      <>
         <div style={statusbar}>
            <div id="laranja" style={statusbar_top_orange}>
               <div
                  id="laranja-left"
                  style={{
                     padding: "4px",
                  }}
               >
                  <div style={statusbar_top_orange__title}>SEICHO NO IE</div>
               </div>
               <div id="laranja-right" style={statusbar_top_orange__info}>
                  <p style={statusbar_info__name}>
                     Bem vindo,{" "}
                     <strong>
                        {authUser.funcao} {authUser.nome}
                     </strong>
                  </p>
                  <p style={statusbar_info__regional}>
                     Associação local Vila Carrão / Regional SP-Aricanduva
                  </p>
               </div>
            </div>

            <div id="verde" style={statubsar_bottom_green}>
               <div style={statubsar_bottom_green__datetime}>
                  <strong>Quarta-feira, 10 de março de 2021 - 19:27 PM</strong>
               </div>
               <div>
                  <p style={statusbar_icons}>
                     <RiLogoutBoxLine size={iconSize} />
                     <RiUser2Line size={iconSize} />
                  </p>
               </div>
            </div>
         </div>
      </>
   );
}
