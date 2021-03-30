import styled from 'styled-components';

export const Card = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 260px;
   height: 340px;
   padding: 1px;
   background-color: #9ca;

   margin-top: 14px;
   margin-bottom: 14px;
   margin-left: 12px;
   margin-right: 40px;
`;

export const CardImg = styled.div`
   display: flex;
   align-items: flex-start;
   justify-content: center;

   height: 65%;
`;

export const Img = styled.img`
   max-width: 100%;
   max-height: 100%;
`;

export const CardPreletorNome = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   height: 15%;
   border-top: 1px solid #000;

   color: #000;
   font-size: 19px;
   background-color: #adb;
`;

export const CardBody = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-end;

   height: 20%;
   padding: 5px 14px;

   font-family: 'Lato';
   color: #fff;
   background-color: #adb;
`;

export const PreletorInfo = styled.p`
   color: #000;
   font-size: 14px;
   font-weight: 600;
   line-height: 2.5px;
`;
