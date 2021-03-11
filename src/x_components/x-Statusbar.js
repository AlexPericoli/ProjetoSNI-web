import React from "react";
import { useSelector } from "react-redux";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "bootstrap/dist/css/bootstrap.min.css";

import { RiLogoutCircleFill } from "react-icons/ri";

import { Cores } from "../../../assets/styles/cores";

export default function StatusBar() {
   const bgDateBar = Cores.color_cinza_1;
   const textDateBar = Cores.color_branco_1;

   const authUser = useSelector((state) => state.usuarios.authUser);

   return (
      <Row
         className="align-items-center"
         style={{ color: textDateBar, backgroundColor: bgDateBar }}
      >
         <Col className="col-7" style={{ padding: 0, color: textDateBar }}>
            <div className="h5 date">Sexta-feira, 13 de novembro de 2020</div>
         </Col>
         <div className="col-5" style={{ color: textDateBar }}>
            <div
               style={{
                  display: "flex",
                  textAlign: "right",
               }}
               className="justify-content-end align-items-center"
            >
               <RiLogoutCircleFill size="40" />
               <p style={{ marginLeft: "30px" }} className="h5 text-right">
                  Bem vindo, {authUser.funcao} {authUser.nome}
               </p>
            </div>
         </div>
      </Row>
   );
}
