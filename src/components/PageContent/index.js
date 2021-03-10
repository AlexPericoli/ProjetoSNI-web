import React from "react";
import Routes from "../../routes";

import Sidebar from "../Sidebar";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "bootstrap/dist/css/bootstrap.min.css";

export default function PageContent() {
   return (
      <Row style={{ height: "100vh" }}>
         <div style={{ width: "16%" }}>
            <Sidebar />
         </div>
         <div style={{ width: "84%", backgroundColor: "gold" }}>
            <div style={{ height: "98px", backgroundColor: "#fff" }}>
               <div style={{ display: "flex" }}>
                  <div
                     style={{
                        flex: 1,
                        width: "50%",
                        paddingTop: "5px",
                     }}
                  >
                     <p className="h6">
                        <strong style={{ marginLeft: "11px" }}>
                           Quarta-feira, 10 de março de 2021 - 19:27 PM
                        </strong>
                     </p>
                  </div>
                  <div
                     style={{
                        flex: 1,
                        textAlign: "right",
                        paddingTop: "10px",
                     }}
                  >
                     <div style={{ lineHeight: "5px" }}>
                        <p>
                           Bem-vindo, <strong>Alexandre Marian Pericoli</strong>
                        </p>
                        <p>Sair</p>
                     </div>
                  </div>
               </div>
            </div>
            <div>CONTENT</div>
         </div>
      </Row>
   );
}
