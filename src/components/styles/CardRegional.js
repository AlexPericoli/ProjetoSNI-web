import styled from "styled-components";

export const Card = styled.div`
   display: flex;
   flex-direction: column;
   width: 270px;
   height: 340px;
   padding: 1px;
   background-color: #fff;
   border: 2px solid #bbb;
`;

export const CardImg = styled.div`
   display: flex;
   align-items: flex-start;
   justify-content: center;
   height: 75%;
   border-bottom: 1px solid #aaa;
`;

export const CardBody = styled.div`
   height: 25%;
   padding: 20px 16px;
   font-family: "Roboto";
   line-height: 2px;
   background-color: #fff;
`;

export const Img = styled.img`
   width: auto;
   max-width: 100%;
   max-height: 252px;
`;

export const TextTitle = styled.p`
   font-size: 19px;
   font-weight: 700;
`;

export const TextLocation = styled.p`
   font-size: 14px;
   padding-top: 10px;
`;

export const TextPhone = styled.p`
   font-size: 14px;
`;
