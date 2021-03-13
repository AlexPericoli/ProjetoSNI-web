import styled from "styled-components";

const TextoInfo = (props) => props.theme.preto_1;
const TextoAzul = (props) => props.theme.azul_logo_1;
const BrancoBotao = (props) => props.theme.branco_2;
const Preto1 = (props) => props.theme.preto_1;
const FundoCard = (props) => props.theme.branco_3;

export const Container = styled.div`
   width: 24%;
   height: 290px;
   padding: 7px;
   background-color: ${FundoCard};
   border-radius: 10px;

   display: flex;
   align-items: flex-start;

   .area_avatar {
      img {
         width: 110px;
         height: 130px;
         border-radius: 20px;
         border: 2px solid ${Preto1};
      }
   }

   .area_info {
      flex: 1;
      display: flex;
      flex-direction: column;

      height: 100%;
      margin-left: 12px;

      h3 {
         font-size: 29px;
         font-weight: 400;
         font-family: "Oswald", sans-serif;
      }
   }

   h3,
   .datas_agendadas,
   span {
      color: ${TextoInfo};
      margin-left: 12px;
   }

   span {
      font-size: 18px;
      font-weight: 400;
      font-family: "Archivo", sans-serif;
   }

   .datas_agendadas {
      flex: 1;
      margin-top: 15px;

      p {
         color: ${TextoAzul};
         margin-bottom: 10px;
         font-size: 16px;
         font-weight: 400;
         font-family: "Roboto", sans-serif;

         strong {
            font-size: 15px;
            font-weight: 700;
         }

         div {
            color: ${TextoInfo};
            font-weight: 400;
         }
      }
   }

   .area_botoes {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      width: 100%;
      border-top: 1px solid ${Preto1};

      button {
         color: ${BrancoBotao};
         border: 1px solid ${BrancoBotao};
         font-size: 14px;
         margin-right: 5px;
         margin-top: 10px;
         padding: 5px 10px;
         border-radius: 5px;
         background-color: ${Preto1};
      }
   }
`;
