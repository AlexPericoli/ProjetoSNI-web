import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   border-bottom: 1px solid #555;
`;

export const LogoArea = styled.div`
   flex: 1;
   display: flex;

   padding: 6px;
`;

export const Logotipo = styled.img`
   width: 78px;
   border-radius: 7px;
`;

export const LogoTitleArea = styled.div`
   display: flex;
   flex-direction: column;

   padding-left: 10px;
   line-height: 1.5px;
`;

export const LogoTitle = styled.h1`
   font-weight: 600;
   font-family: 'Lato';
`;

export const LogoSubtitle = styled.h4`
   font-size: 19px;
   font-weight: 500;
   line-height: 1px;
`;

export const InfoArea = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   justify-content: center;

   padding-right: 10px;
`;

export const InfoUsuario = styled.div`
   font-size: 15px;
   font-weight: 600;
   font-family: 'Lato';
   letter-spacing: 0.4px;
   text-transform: uppercase;

   border-bottom: 1px solid #125;
`;

export const InfoUsuarioDestaque = styled.div`
   padding: 12px;
   border-radius: 5px;

   font-size: 15px;
   font-weight: 600;
   font-family: 'Lato';
   line-height: 1px;
   letter-spacing: 0.4px;
   text-transform: uppercase;
`;
