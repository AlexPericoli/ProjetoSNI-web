import React from "react";

import Sidebar from "./Sidebar";
import Statusbar from "./Statusbar";

import Row from "react-bootstrap/Row";

import { sidebar, statusbar, content_area } from "../assets/styles/PageContent";
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
            <div>CONTENT</div>
         </div>
      </Row>
   );
}
