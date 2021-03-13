import TituloPagina from "../../components/TituloPagina";

import { Container, LinkItem } from "./styles";

import aricanduva from "../../assets/images/regionais/aricanduva.jpg";
import penha from "../../assets/images/regionais/penha.jpg";

export default function Regionais() {
   return (
      <Container>
         <TituloPagina titulo="Associações Locais" corBarra="red" />
         <div className="conteudo_pagina">
            <div className="regional_item">
               <LinkItem to="/assoc_locais/1">
                  <div className="area_imagem">
                     <img src={aricanduva} alt="" />
                  </div>
                  <div className="area_info">
                     <h3>SP Aricanduva</h3>
                     <p>Rua João da Silva, 285</p>
                     <p>Vila Aricanduva, SP</p>
                  </div>
               </LinkItem>
            </div>
            <div className="regional_item">
               <LinkItem to="/assoc_locais/2">
                  <div className="area_imagem">
                     <img src={penha} alt="" />
                  </div>
                  <div className="area_info">
                     <h3>Penha</h3>
                     <p>Rua Guilherme Marian, 285</p>
                     <p>Penha, SP</p>
                  </div>
               </LinkItem>
            </div>
         </div>
      </Container>
   );
}
