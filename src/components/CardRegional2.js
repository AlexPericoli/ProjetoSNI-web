import React from "react";

import {
   Card,
   CardImg,
   CardBody,
   Img,
   TextTitle,
   TextLocation,
   TextPhone,
} from "./styles/CardRegional";

export default function CardRegional({ id, title, address, phone, photo }) {
   return (
      <Card>
         <CardImg>
            <Img src={photo} alt="" />
         </CardImg>
         <CardBody>
            <TextTitle>{title}</TextTitle>
            <TextLocation>{`${address.street}, ${address.number}`}</TextLocation>
            <TextPhone>Tel.: {phone}</TextPhone>
         </CardBody>
      </Card>
   );
}
