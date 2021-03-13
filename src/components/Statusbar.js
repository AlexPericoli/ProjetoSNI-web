import React from "react";
import { useSelector } from "react-redux";

import { RiLogoutBoxLine, RiUser2Line } from "react-icons/ri";

import "../assets/styles/Statusbar.css";

export default function Statusbar() {
   const iconSize = 23;
   const authUser = useSelector((state) => state.usuarios.authUser);

   return (
      <>
         <div className="statusbar">
            <div className="statusbar_top_orange">
               <div
                  id="laranja-left"
                  style={{
                     padding: "4px",
                  }}
               >
                  <div className="statusbar_top_orange__title">
                     SEICHO NO IE
                  </div>
               </div>
               <div className="statusbar_top_orange__info">
                  <p className="statusbar_info__name">
                     Bem vindo,{" "}
                     <strong>
                        {authUser.funcao} {authUser.nome}
                     </strong>
                  </p>
                  <p className="statusbar_info__regional">
                     Associação local Vila Carrão / Regional SP-Aricanduva
                  </p>
               </div>
            </div>

            <div className="statubsar_bottom_green">
               <div className="statubsar_bottom_green__datetime">
                  <strong>Quarta-feira, 10 de março de 2021 - 19:27 PM</strong>
               </div>
               <div>
                  <p className="statusbar_icons">
                     <RiLogoutBoxLine size={iconSize} />
                     <RiUser2Line size={iconSize} />
                  </p>
               </div>
            </div>
         </div>
      </>
   );
}
