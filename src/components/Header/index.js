import React from 'react';
import {
   Container,
   LogoArea,
   Logotipo,
   LogoTitleArea,
   LogoTitle,
   LogoSubtitle,
   InfoArea,
   InfoNomeUsuario,
} from './styles';

import logotipo from '../../assets/images/logotipo.jpg';

export function Header() {
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
            <InfoNomeUsuario>Preletor: Sérgio dos Santos Paulo</InfoNomeUsuario>
            <InfoNomeUsuario>Núcleo Vila Carrão</InfoNomeUsuario>
         </InfoArea>
      </Container>
   );
}
