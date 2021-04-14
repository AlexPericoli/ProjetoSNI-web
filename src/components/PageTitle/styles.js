import styled from 'styled-components';

export const PageTitleArea = styled.div`
   display: flex;

   width: 100%;
   margin: 0;
   padding: 5px;
   border-bottom: 3px solid #bbb;
`;

export const Title = styled.h1`
   display: flex;
   align-items: center;
   color: ${(props) => props.color};
   font-size: 30px;
   font-weight: 700;
   font-family: 'Lato';
   letter-spacing: 0.2px;

   padding-left: 14px;
`;

export const Subtitle = styled.h3`
   flex: 1;
   display: flex;
   align-items: center;

   color: ${(props) => props.color};
   font-size: 28px;
   font-weight: 300;

   margin-top: 4px;
   margin-left: 15px;
`;

export const IconArea = styled.div`
   display: flex;
   align-items: center;

   height: 100%;
   padding: 0 8px;
   margin-right: 20px;
   border-radius: 7px;

   cursor: pointer;

   div {
      display: flex;
      align-items: center;
      font-size: 20px;
      font-weight: 600;

      color: #000;
      padding: 0 4px;
      border-radius: 5px;
   }
`;

export const ModalBody = styled.div`
   display: flex;

   height: 440px;
   padding: 10px;
`;

export const ModalFotoArea = styled.div`
   margin-right: 10px;
`;

export const ModalCartArea = styled.div`
   width: 100%;
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

export const ButtonArea = styled.div`
   display: flex;
`;
