import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   background-color: chartreuse;
`;

export const PageTitleArea = styled.div`
   width: 100%;
   margin: 0;
   padding: 0;
`;

export const PageContent = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: flex-start;

   width: 100%;
   height: 95%;
   background-color: #ddd;

   overflow-y: scroll;
`;

export const CardList = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: flex-start;

   width: 100%;
   height: 95%;
   background-color: #ddd;

   overflow-y: scroll;
`;
