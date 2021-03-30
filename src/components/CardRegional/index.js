import React from 'react';
import P from 'prop-types';

import {
   Card,
   CardImg,
   CardRegionalTitle,
   CardBody,
   Img,
   RegionalInfo,
} from './styles';

CardRegional.propTypes = {
   regional: P.shape({
      id: P.number,
      titulo: P.string,
      endereco: P.shape({
         rua: P.string,
         numero: P.string,
      }),
      estado: P.string,
      fone: P.string,
      foto: P.string,
   }),
};

export function CardRegional({ regional }) {
   return (
      <Card>
         <CardImg>
            <Img src={regional.foto} />
         </CardImg>
         <CardRegionalTitle>
            {regional.estado} {regional.titulo}
         </CardRegionalTitle>
         <CardBody>
            <RegionalInfo>
               {regional.endereco.rua}, {regional.endereco.numero}
            </RegionalInfo>
            <RegionalInfo>Fone: {regional.fone}</RegionalInfo>
         </CardBody>
      </Card>
   );
}
