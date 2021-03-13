import React from "react";

import {
   Card,
   CardImg,
   CardBody,
   Img,
   TextTitle,
   TextInfo,
} from "./styles/CardBook";

export default function CardBook({
   id,
   title,
   vol,
   edition,
   author,
   publisher,
   cover,
}) {
   return (
      <Card>
         <CardImg>
            <Img src={cover} alt="" />
         </CardImg>
         <CardBody>
            <TextTitle>
               {title}, vol. {vol}
            </TextTitle>
            <TextInfo>{edition}</TextInfo>
            <TextInfo>{author}</TextInfo>
            <TextInfo>{publisher}</TextInfo>
         </CardBody>
      </Card>
   );
}
