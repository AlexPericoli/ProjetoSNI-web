import React from "react";
import Card from "react-bootstrap/Card";

import "./styles/CardAssocLocal.css";

import "../assets/styles/fonts.css";

export default function CardAssocLocal({ id, title, address, phone, foto }) {
   return (
      <Card style={{ width: "18rem" }}>
         <Card.Img src={foto} style={{ height: "190px" }} />
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
               {title}
            </Card.Title>
            <Card.Text>
               {`${address.street}, ${address.number}`}
               <br></br>
               Tel.: {`${phone}`}
            </Card.Text>
         </Card.Body>
      </Card>
   );
}
