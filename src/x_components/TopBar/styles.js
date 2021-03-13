import { Link } from "react-router-dom";
import styled from "styled-components";

const Branco1 = (props) => props.theme.branco_1;
const AzulLogo2 = (props) => props.theme.azul_logo_2;
const Menu1 = (props) => props.theme.menu_1;

export const Container = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   font-family: "Lato", sans-serif;

   .cabecalho {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-radius: 12px;
      border: 2px solid ${Branco1};
      //background-color: ${AzulLogo2};
      background: linear-gradient(90deg, blue, cyan, 100%);

      img {
         width: 90px;
         border-radius: 12px;
         margin-right: 12px;
      }

      h1 {
         width: 90%;
         color: ${Branco1};
         font-size: 41px;
         border-top-width: 1px solid;
         border-top-color: ${Branco1};
      }

      div {
         width: 400px;
         padding-right: 10px;
         text-align: right;
         color: ${Branco1};
         justify-self: flex-end;
      }
   }

   .menu {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${Branco1};

      div {
         padding: 7px 25px;
         text-align: center;
         text-transform: uppercase;
         font-weight: 400;
         font-family: "Archivo", sans-serif;
         border-radius: 8px;
         transition: background-color ease 0.2s;

         &:hover {
            background-color: ${Menu1};
         }
      }
   }
`;

export const LinkText = styled(Link)`
   color: ${Branco1};
   text-decoration: none;
`;
