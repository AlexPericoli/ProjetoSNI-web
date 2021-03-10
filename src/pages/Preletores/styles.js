import styled from "styled-components";

const Branco1 = (props) => props.theme.branco_1;
const Preto3 = (props) => props.theme.preto_3;

export const Container = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   flex-direction: column;

   .conteudo_pagina {
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
`;

export const AreaPreletores = styled.div`
   width: 100%;
`;

export const AssociacaoLocalItem = styled.div`
   display: flex;
   flex-direction: column;
   padding: 5px;
   background-color: ${Preto3};

   .al_cabecalho {
      display: flex;
      flex-direction: row;
      margin-bottom: 5px;
      border-bottom: 1px solid ${Branco1};
      border-bottom-left-radius: 8px;

      img {
         width: 45px;
         height: 45px;
         border-radius: 8px;
      }

      h3 {
         color: var(--color-branco-1);
         display: flex;
         align-items: center;
         margin-left: 10px;
         color: var(--color-branco-1);
         font: 100 23px "Lato", sans-serif;
      }
   }

   .area_preletores {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 20px 5px;

      margin-left: 5px;
      border-bottom: 1px solid #888;
      background-color: ${Preto3};
   }
`;
