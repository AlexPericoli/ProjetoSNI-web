import React from "react";

import PageTitle from "../components/PageTitle";
import Card from "../components/CardRegional2";

export default function Regionais() {
   const array = [
      {
         id: 1,
         title: "Aricanduva",
         city: "SP",
         address: {
            street: "Rua Baquiá",
            number: 205,
         },
         phone: "11 9 2376-3857",
         photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyqyM8Gr8fSP6aj4GYfgWdXhnAu8n70QhUqA&usqp=CAU",
      },
      {
         id: 2,
         title: "Penha",
         city: "SP",
         address: {
            street: "Av. Júpiter",
            number: 307,
         },
         phone: "11 9 2376-3857",
         photo:
            "https://media-cdn.tripadvisor.com/media/photo-s/1a/d8/76/58/fachada-externa.jpg",
      },
      {
         id: 3,
         title: "Vila Formosa",
         city: "SP",
         address: {
            street: "Rua Netuno",
            number: 408,
         },
         phone: "11 9 2376-3857",
         photo:
            "https://religiao.culturamix.com/blog/wp-content/gallery/seicho-no-ie-3/Seicho-no-ie-7.jpg",
      },
      {
         id: 4,
         title: "Interlagos",
         city: "SP",
         address: {
            street: "Rua Saturno",
            number: 205,
         },
         phone: "11 9 2376-3857",
         photo: "https://www.centrallife.com.br/images/Acao/0009%20(1).jpg",
      },
      {
         id: 5,
         title: "Praia Grande",
         city: "SP",
         address: {
            street: "Rua Mercúrio",
            number: 205,
         },
         photo:
            "https://sni.org.br/wp-content/uploads/2021/03/Fachada-Academia-de-Ibiuna-768x512.jpg",
      },
      {
         id: 6,
         title: "Praia Grande",
         city: "SP",
         address: {
            street: "Rua Mercúrio",
            number: 205,
         },
         photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyqyM8Gr8fSP6aj4GYfgWdXhnAu8n70QhUqA&usqp=CAU",
      },
      {
         id: 7,
         title: "Praia Grande",
         city: "SP",
         address: {
            street: "Rua Mercúrio",
            number: 205,
         },
         photo:
            "https://media-cdn.tripadvisor.com/media/photo-s/1a/d8/76/58/fachada-externa.jpg",
      },
      {
         id: 8,
         title: "Praia Grande",
         city: "SP",
         address: {
            street: "Rua Mercúrio",
            number: 205,
         },
         photo:
            "https://religiao.culturamix.com/blog/wp-content/gallery/seicho-no-ie-3/Seicho-no-ie-7.jpg",
      },
   ];

   return (
      <div id="content-area">
         <PageTitle title="Regionais" />
         <div id="page-content-2">
            {array.map((item, index) => (
               <Card
                  id={item.id}
                  title={item.title}
                  address={item.address}
                  phone={item.phone}
                  photo={item.photo}
               />
            ))}
         </div>
      </div>
   );
}
