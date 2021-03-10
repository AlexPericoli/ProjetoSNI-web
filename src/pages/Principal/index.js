import TituloPagina from "../../components/TituloPagina";

import { Container } from "./styles";

export default function Principal() {
   return (
      <Container>
         <TituloPagina
            titulo="Produtos em estoque"
            corBarra={({ theme }) => theme.verde_1}
         />
         <div className="conteudo_pagina">
            <div className="regional">
               <div className="area_info">
                  <p className="nome_regional">
                     SP ARICANDUVA - Associação local Vila Carrão
                  </p>
                  <p>Vendas em outubro de 2020</p>
               </div>
            </div>
            <p className="prod_categoria">LIVROS</p>
            <div className="vendas">
               <p className="prod_vendas">Preleções sobre a Sutra Sagrada</p>
               <p>11</p>
            </div>
            <div className="vendas">
               <p className="prod_vendas">A verdade em orações volume 1</p>
               <p>30</p>
            </div>
            <div className="vendas">
               <p className="prod_vendas">Questões para refletir</p>
               <p>11</p>
            </div>
            <div className="vendas">
               <p className="subtotal">SUBTOTAL</p>
               <p className="subtotal">52</p>
            </div>

            <p className="prod_categoria">SUTRAS</p>
            <div className="vendas">
               <p className="prod_vendas">Sutras Sagradas 11,5 x 17,5 cm</p>
               <p>12</p>
            </div>
            <div className="vendas">
               <p className="prod_vendas">
                  Sutra Sagrada em 30 capítuloas para leitura diária
               </p>
               <p>15</p>
            </div>
            <div className="vendas">
               <p className="prod_vendas">
                  Sutra Sagrada chuva de néctar da verdade capa dura
               </p>
               <p>10</p>
            </div>
            <div className="vendas">
               <p className="subtotal">SUBTOTAL</p>
               <p className="subtotal">59</p>
            </div>

            <p className="prod_categoria">CDs</p>
            <div className="vendas">
               <p className="prod_vendas">Meditação Shinsokan</p>
               <p>12</p>
            </div>
            <div className="vendas">
               <p className="prod_vendas">
                  Sutra Sagrada chuva de néctar da verdade em áudio
               </p>
               <p>15</p>
            </div>
            <div className="vendas">
               <p className="subtotal">SUBTOTAL</p>
               <p className="subtotal">27</p>
            </div>
         </div>
      </Container>
   );
}
