import React from "react";

import { Container } from "./styles";

export default function CardPreletor({ nome, nivel, imagem }) {
   const image_url = `/assets/images/preletores/${imagem}.jpg`;

   return (
      <Container>
         <div className="area_avatar">
            <img src={image_url} alt="" />
         </div>
         <div className="area_info">
            <h3>{nome}</h3>
            <span>Preletor {nivel}</span>
            <div className="datas_agendadas">
               <p>
                  <strong>01/11 às 18:00h</strong>
                  <br></br>Associação Local Vila Matilde.<br></br>
                  Palestra: Vamos orar durante o dia inteiro
               </p>
               <p>
                  <strong>01/11 às 18:00h</strong>
                  <br></br>Associação Local Vila Matilde.<br></br>Palestra:
                  Vamos orar durante o dia inteiro
               </p>
            </div>
            <div className="area_botoes">
               <button>Perfil</button>
               <button>Enviar mensagem</button>
            </div>
         </div>
      </Container>
   );
}
