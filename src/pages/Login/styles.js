import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

   width: 100%;
   height: 500px;

   border-radius: 25px;
`;

export const PageContent = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

   width: 40%;
   padding: 5px 8px;
   color: var(--color-preto-1);
   background-color: var(--color-preto-3);
   border-radius: 15px;
`;

export const AreaImagem = styled.div`
   flex: 1;
   align-items: center;
   justify-content: center;

   border-top-left-radius: 25px;
   border-bottom-left-radius: 25px;

   background-color: yellow;

   img {
      width: 90%;
      border-radius: 25px;
   }
`;

export const AreaForm = styled.div`
   flex: 1;
   align-items: center;
   justify-content: center;

   background-color: darkred;

   form {
      width: 80%;
   }

   label {
      color: #fff;
      font: 100 22px "Lato", sans-serif;
   }

   input {
      width: 100%;
      font: 700 19px "Lato", sans-serif;
   }

   div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      button {
         width: 70%;
         padding: 8px;
         margin-top: 10px;
         align-items: center;
         justify-content: center;
         border-radius: 8px;
         background-color: #dd4;
         font-size: 17px;
         font-weight: 700;
         font-family: "Lato", sans-serif;
      }
   }
`;
