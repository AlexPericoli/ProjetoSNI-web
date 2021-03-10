import React from "react";
import Routes from "../../routes";

import Sidebar from "../Sidebar";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "bootstrap/dist/css/bootstrap.min.css";

export default function PageContent() {
   return (
      <Row style={{ height: "100vh" }}>
         <div style={{ width: "15%", backgroundColor: "crimson" }}>
            <Sidebar />
         </div>
         <div style={{ width: "85%", backgroundColor: "gold" }}>
            <div style={{ height: "50px", backgroundColor: "#fff" }}>
               <div style={{ display: "flex" }}>
                  <div
                     style={{
                        flex: 1,
                        width: "50%",
                        paddingTop: "10px",
                        backgroundColor: "seagreen",
                     }}
                  >
                     <p className="h6">BREADCRUMB</p>
                  </div>
                  <div
                     style={{
                        flex: 1,
                        textAlign: "right",
                        paddingTop: "10px",
                        backgroundColor: "lightblue",
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
            <div>HEADER</div>
         </div>
      </Row>
   );
}
