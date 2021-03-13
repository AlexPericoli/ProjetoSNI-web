import React from "react";
import PageContent from "./components/PageContent.js";

import { ThemeProvider } from "styled-components";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/styles/global.css";
import { Cores } from "./assets/styles/cores";

import "./assets/styles/fonts.css";

function App() {
   //const appBgColor = Cores.fundo_padrao;
   const appBgColor = "#000";
   const contentbgColor = Cores.branco_3;

   return (
      <ThemeProvider theme={Cores}>
         <div
            className="container-fluid"
            style={{
               height: "100vh",
               margin: "auto",
            }}
         >
            <Row
               style={{
                  height: "100vh",
                  margin: "auto",
                  backgroundColor: appBgColor,
               }}
            >
               <Col style={{ backgroundColor: "#000" }} className="col-1"></Col>
               <Col
                  style={{ backgroundColor: contentbgColor }}
                  className="col-10"
               >
                  <PageContent />
               </Col>
               <Col style={{ backgroundColor: "#000" }} className="col-1"></Col>
            </Row>
         </div>
      </ThemeProvider>
   );
}

export default App;
