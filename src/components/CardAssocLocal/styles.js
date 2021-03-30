import styled from 'styled-components';

export const Card = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 260px;
   height: 330px;
   padding: 1px;
   background-color: #679;

   margin-top: 14px;
   margin-bottom: 14px;
   margin-left: 12px;
   margin-right: 40px;
`;

export const CardImg = styled.div`
   display: flex;
   align-items: flex-start;
   justify-content: center;

   height: 60%;
`;

export const Img = styled.img`
   max-width: 100%;
   max-height: 100%;
`;

export const CardAssocLocalTitle = styled.div`
   display: flex;
   flex-direction: column;

   height: 15%;
   padding: 5px 14px;
   border-top: 1px solid #ddd;
   border-bottom: 1px solid #ddd;
   background-color: #697;

   color: #fff;
   font-size: 18px;
   text-align: center;
`;

export const CardBody = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-end;

   height: 25%;
   padding: 10px 14px;

   font-family: 'Lato';
   color: #fff;
   background-color: #697;
`;

export const AssocLocalInfo = styled.p`
   font-size: 14px;
   line-height: 2.5px;
`;
