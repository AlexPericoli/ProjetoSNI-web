import styled from "styled-components";

const appBgColor = (props) => props.theme.fundo_padrao;

export const AppContainer = styled.div`
   width: 100vw;
   height: 100vh;
   background-color: ${appBgColor};
`;
