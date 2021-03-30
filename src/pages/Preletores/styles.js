import styled from 'styled-components';

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

export const ParteSuperior = styled.div`
   display: flex;

   height: 50%;
   font-family: Lato;
`;

export const AreaFoto = styled.div`
   width: 30%;
   border: 1px solid #999;
`;

export const AreaPalestras = styled.div`
   width: 70%;
   padding: 0 10px;

   text-align: left;
   line-height: 5px;
`;

export const TituloSuperior = styled.h1`
   margin-bottom: 25px;
   font-size: 25px;
`;

export const PreletorLocal = styled.h1`
   font-size: 19px;
`;

export const PalestrasArea = styled.div``;

export const PalestraItem = styled.div`
   margin-bottom: 30px;
`;

export const PalestraData = styled.p`
   font-size: 17px;
`;

export const PalestraDescricao = styled.p`
   font-size: 17px;
`;

export const ParteInferior = styled.div`
   display: flex;
   flex-direction: column;

   height: 50%;
`;
