import React from "react";
import logotipo from "../assets/images/logotipo.jpg";

export default function Sidebar() {
   return (
      <div id="area--sidebar">
         <div
            id="logo-area"
            style={{
               display: "flex",
               alignItems: " center",
               borderBottom: "1px solid #888",
            }}
         >
            <div id="image-area">
               <img src={logotipo} width="100px" alt="" />
            </div>
            <div
               id="title-area"
               style={{
                  width: "60%",
                  paddingLeft: "5px",
                  fontSize: "17px",
                  fontWeight: 700,
                  textAlign: "center",
               }}
            >
               Associação local Vila Carrão
            </div>
         </div>
         <div id="menu-area"></div>
      </div>
   );
}
