import React from "react";
import { Link } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import PageTitle from "../components/PageTitle";
import Card from "../components/CardPreletor2";

import "./styles/Preletores.css";

export default function Regionais() {
   const [showModal, setShowModal] = React.useState(false);
   const [preletor, setPreletor] = React.useState({});

   const array = [
      {
         id: 1,
         name: "Marie Murakami",
         location: "Jabaquara",
         lectures: [
            {
               id: 1,
               dateTime: "16/04/2020",
               theme: "Captando ideias do mundo espiritual",
            },
            {
               id: 2,
               dateTime: "16/05/2020",
               theme: "Captando ideias do mundo espiritual",
            },
            {
               id: 3,
               dateTime: "16/06/2020",
               theme: "Captando ideias do mundo espiritual",
            },
            {
               id: 4,
               dateTime: "16/07/2020",
               theme: "Captando ideias do mundo espiritual",
            },
         ],
         phone: "11 9 2376-3857",
         obs:
            "Sua carreira de preletor começou em asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd ",
         photo:
            "https://i1.sndcdn.com/artworks-000060960394-e2pmxm-t500x500.jpg",
      },
      {
         id: 2,
         name: "Enio Maçaki Hara",
         location: "Sede Central",
         lectures: [
            {
               id: 1,
               dateTime: "16/04/2020",
               theme: "Captando ideias do mundo espiritual",
            },
            {
               id: 2,
               dateTime: "16/05/2020",
               theme: "Captando ideias do mundo espiritual",
            },
            {
               id: 3,
               dateTime: "16/06/2020",
               theme: "Captando ideias do mundo espiritual",
            },
            {
               id: 4,
               dateTime: "16/07/2020",
               theme: "Captando ideias do mundo espiritual",
            },
         ],
         phone: "11 9 2376-3857",
         obs:
            "Sua carreira de preletor começou em asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd ",
         photo:
            "https://www.registrodiario.com.br/arquivos/noticias/7698/1544833e3d0378df7b0feb19e8cb7ac1.jpg",
      },
   ];

   function handleCardPreletor(preletor) {
      setPreletor(preletor);
      setShowModal(true);
   }

   function handleClose() {
      setShowModal(false);
   }

   return (
      <div id="content-area">
         <PageTitle title="Preletores" />
         <div id="page-content">
            {array.map((item, index) => (
               <Link onClick={() => handleCardPreletor(item)}>
                  <Card
                     id={item.id}
                     name={item.name}
                     location={item.location}
                     lectures={item.lectures}
                     phone={item.phone}
                     photo={item.photo}
                  />
               </Link>
            ))}
         </div>

         <Modal show={showModal} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
               <Modal.Title>
                  <div style={{ display: "flex" }}>
                     <div>
                        <img
                           width="40%"
                           src="https://i1.sndcdn.com/artworks-000060960394-e2pmxm-t500x500.jpg"
                           alt=""
                        />
                     </div>
                     <div>2</div>
                  </div>
                  Preletor(a)&nbsp;{preletor.name}{" "}
                  <p className="h6">{preletor.location}</p>
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="primary" onClick={handleClose}>
                  Save Changes
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
}
