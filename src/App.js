import React from "react";
import PageContent from "./components/PageContent";

import { ThemeProvider } from "styled-components";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/styles/global.css";
import { Cores } from "./assets/styles/cores";

function App() {
   //const appBgColor = Cores.fundo_padrao;
   const appBgColor = "#acf";
   const contentbgColor = Cores.branco_3;

   return (
      <ThemeProvider theme={Cores}>
         <div
            className="container-fluid"
            style={{
               height: "100vh",
               margin: "auto",
               backgroundColor: appBgColor,
            }}
         >
            <Row
               style={{
                  height: "100vh",
                  margin: "auto",
                  backgroundColor: appBgColor,
               }}
            >
               <Col
                  style={{ backgroundColor: "darkred" }}
                  className="col-1"
               ></Col>
               <Col
                  style={{ backgroundColor: contentbgColor }}
                  className="col-10"
               >
                  <PageContent />
               </Col>
               <Col
                  style={{ backgroundColor: "darkred" }}
                  className="col-1"
               ></Col>
            </Row>
         </div>
      </ThemeProvider>
   );
}

export default App;
