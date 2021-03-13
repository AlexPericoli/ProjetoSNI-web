import React from "react";
import Card from "react-bootstrap/Card";

import "./styles/CardRegional.css";

export default function CardRegional({
   id,
   name,
   location,
   lectures,
   phone,
   foto,
}) {
   return (
      <Card style={{ width: "18rem", height: "400px" }}>
         <Card.Img src={foto} style={{ height: "auto" }} />
         <Card.Body>
            <Card.Title
               style={{
                  margin: 0,
                  paddingBottom: "6px",
                  fontSize: "21px",
                  fontWeight: 400,
                  fontFamily: "Roboto",
               }}
            >
               {name}
            </Card.Title>
            <Card.Text>
               {`${location}`}
               <br></br>
               Tel.: {`${phone}`}
            </Card.Text>
         </Card.Body>
      </Card>
   );
}
