import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
`;

export const LogoArea = styled.div`
   display: flex;
   align-items: center;

   border-right: 1px solid #888;
   border-bottom: 1px solid #888;

   height: 81px;
   background-color: #fff;
`;

export const LogoTitleArea = styled.div`
   padding-left: 5px;

   font-size: 17px;
   font-weight: 700;
`;

export const MenuArea = styled.div`
   padding: 15px 17px;

   cursor: pointer;
`;

export const Title = styled.div`
   margin-left: 15px;
`;
