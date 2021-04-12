import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;

   width: 100%;
   height: 100vh;

   h1 {
      font-size: 45px;
      font-weight: 700;

      margin-top: 20px;
      margin-bottom: 130px;
   }
`;

export const LoginArea = styled.div`
   display: flex;

   width: 47%;
   height: 277px;
   padding: 10px;
   border-radius: 7px;

   background-color: #249;
`;

export const LogoArea = styled.div`
   display: flex;
   justify-content: center;

   width: 37%;
   height: 98%;
   min-width: 207px;
   border-radius: 8px;
   background-color: #fff;
`;

export const Logotipo = styled.img`
   width: 250px;
`;

export const FormArea = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;

   margin-left: 25px;
`;

export const Label = styled.label`
   color: #fff;
`;

export const InputEmail = styled.input`
   text-align: left;
   margin-bottom: 20px;
`;

export const InputPassword = styled.input`
   margin-bottom: 40px;
`;

export const BotaoLogin = styled.button`
   transition: all ease 0.5s;

   &:hover {
      background-color: #999;
   }
`;
