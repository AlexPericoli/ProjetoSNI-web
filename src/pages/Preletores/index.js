import { useState, useEffect } from "react";
import api from "../../services/api";

import { Container, AreaPreletores, AssociacaoLocalItem } from "./styles";

import TituloPagina from "../../components/TituloPagina";
import CardPreletor from "../../components/CardPreletor";

import logotipo from "../../assets/images/logotipo2.jpg";

export default function Preletores() {
   const [regional, setRegional] = useState("");

   console.log("teste");
   const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9hc3NvY19sb2NhbCI6MywiaWF0IjoxNjA3MDA2NzU4LCJleHAiOjE2MDcwOTMxNTgsInN1YiI6IjE3In0.daWXuHQXQPRHeiEoR1IOCZu-Sm07QXkKOBWzTkbbUOo";

   useEffect(() => {
      api.get("usuarios", { headers: { Authorization: token } }).then(
         (data) => {
            console.log(data);
         }
      );
   }, []);

   return (
      <Container>
         <div className="conteudo_pagina">
            <TituloPagina
               titulo="Preletores"
               subTitulo="Regional SP-Aricanduva"
            />
            <AreaPreletores>
               <AssociacaoLocalItem>
                  <div className="al_cabecalho">
                     <img src={logotipo} alt="" />
                     <h3>Associação Local Vila Carrão</h3>
                  </div>
                  <div className="area_preletores">
                     <CardPreletor
                        nome="Marie Murakami"
                        nivel="em grau sênior"
                        imagem="marie-murakami"
                     />
                     <CardPreletor
                        nome="Heitor Myiazaki"
                        nivel="da sede internacional"
                        imagem="heitor-myiazaki"
                     />
                     <CardPreletor
                        nome="Arquimedes Ventura"
                        nivel="em grau master"
                        imagem="arquimedes"
                     />
                     <CardPreletor
                        nome="Iara Regina Colombo"
                        nivel="em grau master"
                        imagem="arquimedes"
                     />
                  </div>
               </AssociacaoLocalItem>
            </AreaPreletores>
         </div>
      </Container>
   );
}
