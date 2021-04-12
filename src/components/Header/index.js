import React from 'react';
import { useSelector } from 'react-redux';
import {
   Container,
   LogoArea,
   Logotipo,
   LogoTitleArea,
   LogoTitle,
   LogoSubtitle,
   InfoArea,
   InfoUsuario,
   InfoUsuarioDestaque,
} from './styles';

import logotipo from '../../assets/images/logotipo.jpg';

export function Header() {
   const nomeUsuario = useSelector((state) => state.usuarios.nome);
   const nomeFuncao = useSelector((state) => state.usuarios.nome_funcao);
   const nomePerfil = useSelector((state) => state.usuarios.nome_perfil);
   const nomeLocal = useSelector((state) => state.usuarios.nome_local);
   const corPerfil = useSelector((state) => state.usuarios.cor_perfil);

   return (
      <Container>
         <LogoArea>
            <Logotipo src={logotipo} />
            <LogoTitleArea>
               <LogoTitle>SEICHO NO IE</LogoTitle>
               <LogoSubtitle>Livraria SNI</LogoSubtitle>
            </LogoTitleArea>
         </LogoArea>
         <InfoArea>
            {nomeUsuario && (
               <>
                  <InfoUsuario>
                     {nomeFuncao} {nomeUsuario}
                  </InfoUsuario>
                  <InfoUsuarioDestaque corPerfil={corPerfil}>
                     {nomePerfil} / {nomeLocal}
                  </InfoUsuarioDestaque>
               </>
            )}
         </InfoArea>
      </Container>
   );
}
