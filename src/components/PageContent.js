import React from "react";
import Routes from "../routes";

import Sidebar from "./Sidebar";
import Statusbar from "./Statusbar";

import Row from "react-bootstrap/Row";

import "../assets/styles/PageContent.css";

export default function PageContent() {
   return (
      <Row className="app-main">
         <div className="sidebar">
            <Sidebar />
         </div>
         <div className="content-area">
            <div className="statusbar">
               <Statusbar />
            </div>
            <div className="routes-content">
               <Routes />
            </div>
         </div>
      </Row>
   );
}
