import styled from "styled-components";

const TextoBranco = (props) => props.theme.branco_1;
const FundoStatusBar = (props) => props.theme.preto_2;

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

   color: ${TextoBranco};
   width: 100%;
   height: 30px;
   background-color: ${FundoStatusBar};

   .sub_container {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 90%;
      height: 100%;
      font-family: "Lato", sans-serif;
   }
`;
