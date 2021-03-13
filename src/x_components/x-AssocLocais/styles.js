import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-self: center;

   .conteudo_pagina {
      width: 90%;
      padding: 5px 0;
      color: var(--color-preto-1);
      font-weight: 100;
      font-family: Tahoma, sans-serif;
      background-color: var(--color-preto-3);

      display: flex;
      flex-wrap: wrap;

      .regional_item {
         display: flex;
         justify-content: center;

         width: 21%;
         height: auto;
         margin: 0 8px;
         border-radius: 8px;
         color: var(--color-preto-1);
         background-color: #ccc;
         box-shadow: inset 0 0 5px #222;
         height: auto;
         transition: box-shadow ease 0.2s;

         &:hover {
            box-shadow: inset 0 0 1em #24a, 0 0 1em #24a;
         }

         .area_imagem {
            width: 85%;
            height: 60%;
            margin-bottom: 15px;

            img {
               width: 100%;
               height: 100%;
               border-radius: 8px;
               border: 1px solid var(--color-preto-1);
            }
         }

         .area_info {
            display: flex;
            flex-direction: column;
            align-items: center;

            h3 {
               font-size: 22px;
               font-weight: 200;
               margin-bottom: 5px;
            }
         }
      }
   }
`;

export const LinkItem = styled(Link)`
   color: var(--color-preto-1);
   text-decoration: none;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;
