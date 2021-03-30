import styled from 'styled-components';

export const MenuTitle = styled.div`
   display: flex;

   margin-top: 6px;
   margin-bottom: 6px;
   padding-top: 5px;
   padding-bottom: 5px;
   padding-left: 5px;

   transition: all ease 0.1s;

   color: #fff;
   font-size: 14px;

   font-family: 'Lato';
   letter-spacing: 1px;
`;

export const MenuItem = styled.div`
   display: flex;

   margin-left: 29px;
   margin-bottom: 5px;
   border: 1px solid #000;
   border-radius: 5px;

   &:hover {
      color: #fff;
      background-color: var(--logotipo-1);
   }
`;

export const Title = styled.div`
   margin-left: 15px;
`;
