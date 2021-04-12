import styled from 'styled-components';

export const PageTitleArea = styled.div`
   width: 100%;
   margin: 0;
   padding: 0;
`;

export const PageContent = styled.div`
   width: 100%;
   height: 95%;
   padding: 10px;
   background-color: #ddd;

   overflow-y: scroll;
`;

export const AreaDescricao = styled.div`
   width: 100%;
   padding-top: 12px;

   font-family: Lato;
   font-size: 16px;
`;

export const PedidoDetalhes = styled.div`
   font-size: 21px;
   font-weight: 300;

   margin-top: 30px;
`;

export const ModalBody = styled.div`
   display: flex;

   height: 440px;
   padding: 10px;
`;

export const ModalFotoArea = styled.div`
   width: 35%;
   margin-right: 10px;
`;

export const ModalInfoArea = styled.div`
   width: 55%;
`;

export const ModalTitle = styled.h1`
   font-size: 27px;
`;

export const ModalSubtitle = styled.h3`
   font-size: 27px;
   line-height: 5px;
   margin-bottom: 40px;
`;

export const ModalInfoProduto = styled.p`
   font-size: 15px;
   line-height: 17px;
`;

export const QuantArea = styled.div`
   display: flex;
   font-size: 24px;

   margin-top: 40px;
`;

export const QuantSinalMenos = styled.div`
   width: 45px;
   text-align: center;
   border: 1px solid #aaa;
   border-top-left-radius: 7px;
   border-bottom-left-radius: 7px;
`;

export const QuantNumero = styled.div`
   width: 45px;
   text-align: center;
   border-top: 1px solid #aaa;
   border-bottom: 1px solid #aaa;
`;

export const QuantSinalMais = styled.div`
   width: 45px;
   text-align: center;
   border: 1px solid #aaa;
   border-top-right-radius: 7px;
   border-bottom-right-radius: 7px;
`;

export const BotaoMenos = styled.button`
   width: 100%;
   border: 0;
   background-color: #ddd;
   border-top-left-radius: 7px;
   border-bottom-left-radius: 7px;
`;

export const BotaoMais = styled.button`
   width: 100%;
   border: 0;
   background-color: #ddd;
   border-top-right-radius: 7px;
   border-bottom-right-radius: 7px;
`;
