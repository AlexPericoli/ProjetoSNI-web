import styled from 'styled-components';

export const AppContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-start;

   width: 100vw;
   height: 100vh;
   margin: auto;
`;

export const HeaderArea = styled.div`
   width: 100%;
   height: 10vh;
   background-color: #e7e5e0;
`;

export const PageBody = styled.div`
   display: flex;

   width: 100%;
`;

export const SidebarArea = styled.div`
   width: 16%;
   height: 90vh;
   background-color: #678;
`;

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   width: 84%;
   height: 90vh;
`;
