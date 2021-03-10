import styled from "styled-components";

const CorBarra = (props) => props.corBarra;
const SubTitulo1 = (props) => props.theme.subtitulo_1;

export const Container = styled.div`
   flex: 1;
   width: 90%;
   margin: 25px 0;
   border-bottom: 3px solid ${CorBarra};

   h1 {
      color: var(--color-branco-1);
      font-size: 29px;
      font-weight: 400;
      font-family: "Lato", sans-serif;
      text-transform: uppercase;

      span {
         color: ${SubTitulo1};
      }
   }
`;
