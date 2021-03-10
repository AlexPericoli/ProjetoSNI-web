import React from "react";
import { useSelector } from "react-redux";

import { Container } from "./styles";

export default function StatusBar() {
   const authUser = useSelector((state) => state.usuarios.authUser);

   return (
      <Container>
         <div className="sub_container">
            <div className="data_area">
               <h4>Sexta-feira, 13 de novembro de 2020</h4>
            </div>
            <div className="login_area">
               Bem vindo, {authUser.funcao} {authUser.nome}
            </div>
         </div>
      </Container>
   );
}
