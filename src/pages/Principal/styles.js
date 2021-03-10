import styled from "styled-components";

const Preto3 = (props) => props.theme.preto_3;

export const Container = styled.div`
   width: 100%;
   height: auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-self: center;

   .conteudo_pagina {
      width: 90%;
      padding: 5px 8px;
      font-weight: 100;
      font-family: Tahoma, sans-serif;
      background-color: ${Preto3};

      .regional {
         width: 100%;
         padding: 3px;
         display: flex;
         border-radius: 8px;
         color: var(--color-branco-1);

         img {
            width: 40px;
            margin-right: 5px;
            border-radius: 5px;
         }

         .nome_regional {
            font-size: 19px;
         }
      }

      p.prod_categoria {
         width: 55%;
         padding-left: 4px;
         margin-top: 22px;
         font-size: 19px;
         color: var(--color-branco-1);
         background-color: #444;
      }

      .vendas {
         width: 55%;
         margin-top: 8px;
         display: flex;
         align-items: center;
         justify-content: space-between;
         color: var(--color-branco-1);
         border-bottom: 1px solid #666;

         p.subtotal {
            color: #dd3;
            font-weight: bold;
         }
      }
   }
`;
