import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
   BotaoLogin,
   Container,
   FormArea,
   InputEmail,
   InputPassword,
   Label,
   LoginArea,
   LogoArea,
   Logotipo,
} from './styles';

import logotipo from '../../assets/images/logotipo.jpg';

export function SignIn() {
   const history = useHistory();
   //const nomeUsuario = useSelector((state) => state.usuarios.nome);
   const dispatch = useDispatch();

   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');

   async function handleLogin() {
      const result = await fetch('http://localhost:3333/sessions', {
         method: 'POST',
         body: JSON.stringify({ email, senha }),
         headers: { 'Content-Type': 'application/json' },
      });

      const status = result.status;
      const json = await result.json();
      console.log(json);

      if (status !== 201) {
         alert(json);
         history.push('SignIn');
      } else {
         dispatch({
            type: '@usuarios/SET_TOKEN',
            payload: {
               token: json.token,
               nome: json.usuario.nome,
               id_assoc_local: json.usuario.assoc_local.id,
               nome_assoc_local: json.usuario.assoc_local.nome,
               id_funcao: json.usuario.funcao.id,
               nome_funcao: json.usuario.funcao.descricao,
            },
         });
         localStorage.setItem('token', json.token);
         history.push('PageContent');
      }
   }

   return (
      <Container>
         <h1>Bem vindo ao Projeto SNI 2021!</h1>
         <LoginArea>
            <LogoArea>
               <Logotipo src={logotipo} />
            </LogoArea>
            <FormArea>
               <Label htmlFor="email">E-mail</Label>
               <InputEmail
                  name="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />

               <Label htmlFor="password">Senha</Label>
               <InputPassword
                  name="password"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
               />
               <BotaoLogin onClick={() => handleLogin()}>ENTRAR</BotaoLogin>
            </FormArea>
         </LoginArea>
      </Container>
   );
}
