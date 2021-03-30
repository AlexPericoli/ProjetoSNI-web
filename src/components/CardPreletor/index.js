import React from 'react';
import P from 'prop-types';

import {
   Card,
   CardImg,
   CardPreletorNome,
   CardBody,
   Img,
   PreletorInfo,
} from './styles';

CardPreletor.propTypes = {
   preletor: P.shape({
      id: P.number,
      nome: P.string,
      nivel: P.string,
      local: P.string,
      fone: P.string,
      email: P.string,
      foto: P.string,
   }),
};

export function CardPreletor({ preletor }) {
   return (
      <Card>
         <CardImg>
            <Img src={preletor.foto} />
         </CardImg>
         <CardPreletorNome>{preletor.nome}</CardPreletorNome>
         <CardBody>
            <PreletorInfo>{preletor.nivel}</PreletorInfo>
            <PreletorInfo>Fone: {preletor.fone}</PreletorInfo>
            <PreletorInfo>E-mail: {preletor.email}</PreletorInfo>
         </CardBody>
      </Card>
   );
}
