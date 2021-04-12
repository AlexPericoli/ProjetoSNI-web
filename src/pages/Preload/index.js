import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export function Preload() {
   const history = useHistory();
   const dispatch = useDispatch();

   useEffect(() => {
      async function checkLogin() {
         console.log('estou aqui no Preload');
         const token = localStorage.getItem('token');

         if (token) {
            // Validação de token
            try {
               // Validação do token
               const result = await fetch(
                  'http://localhost:3333/sessions/valida_auth',
                  {
                     method: 'GET',
                     headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${token}`,
                     },
                  },
               );

               // Se o token não for válido, zera e vai para a tela de login
               if (result.status !== 201) {
                  dispatch({
                     type: '@usuarios/SET_TOKEN',
                     payload: { token: '' },
                  });
                  localStorage.setItem('token', '');
                  history.push('SignIn');
               } else {
                  history.push('PageContent');
               }
            } catch (err) {
               return Response.status(401).json({
                  error: 'Token não está presente',
               });
            }
         } else {
            history.push('SignIn');
         }
      }
      checkLogin();
   });

   return (
      <div>
         <h1>Preload</h1>
      </div>
   );
}
