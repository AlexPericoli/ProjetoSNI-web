import React from 'react';
import P from 'prop-types';

import {
   Card,
   CardImg,
   CardAssocLocalTitle,
   AssocLocalInfo,
   CardBody,
   Img,
} from './styles';

CardAssocLocal.propTypes = {
   assoc_local: P.shape({
      id: P.number,
      titulo: P.string,
      regional: P.string,
      endereco: P.shape({
         rua: P.string,
         numero: P.string,
      }),
      estado: P.string,
      fone: P.string,
      foto: P.string,
   }),
};

export function CardAssocLocal({ assoc_local }) {
   return (
      <Card>
         <CardImg>
            <Img src={assoc_local.foto} />
         </CardImg>
         <CardAssocLocalTitle>
            {assoc_local.titulo}
            <AssocLocalInfo>
               <p>{assoc_local.regional}</p>
            </AssocLocalInfo>
         </CardAssocLocalTitle>
         <CardBody>
            <AssocLocalInfo>
               {assoc_local.endereco.rua}, {assoc_local.endereco.numero}
            </AssocLocalInfo>
            <AssocLocalInfo>Fone: {assoc_local.fone}</AssocLocalInfo>
         </CardBody>
      </Card>
   );
}
