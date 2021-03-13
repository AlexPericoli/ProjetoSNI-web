import React from "react";

import {
   Card,
   CardImg,
   CardBody,
   Img,
   TextName,
   TextLocation,
   TextPhone,
} from "./styles/CardPreletor";

export default function CardRegional({
   id,
   name,
   location,
   lectures,
   phone,
   photo,
}) {
   return (
      <Card>
         <CardImg>
            <Img src={photo} alt="" />
         </CardImg>
         <CardBody>
            <TextName>{name}</TextName>
            <TextLocation>{location}</TextLocation>
            <TextPhone>Tel.: {phone}</TextPhone>
         </CardBody>
      </Card>
   );
}
