import React from "react";

import PageTitle from "../components/PageTitle";
import Card from "../components/CardAssocLocal2";

import "./styles/AssocLocais.css";

export default function AssocLocais() {
   const array = [
      {
         id: 1,
         title: "Vila Carrão",
         city: "SP",
         address: {
            street: "Praça Harold Daltro",
            number: 382,
         },
         phone: "11 9 2376-3857",
         photo:
            "https://www.google.com/maps/uv?pb=!1s0x94ce5e0c98dfee87%3A0xd67716ffb279f121!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPqicpmKeb_Y73b9qmxOGKXOBwxTQTVahUzoHC9%3Dw213-h160-k-no!5sseicho%20no%20ie%20vila%20carrao%20-%20Pesquisa%20Google!15sCgIgAQ&imagekey=!1e10!2sAF1QipPqicpmKeb_Y73b9qmxOGKXOBwxTQTVahUzoHC9&hl=pt-BR&sa=X&ved=2ahUKEwjAtIf6tqvvAhUVILkGHXxYChEQoiowCnoECBgQAw&cshid=1615575299970141#",
      },
      {
         id: 2,
         title: "Vila Granada",
         city: "SP",
         address: {
            street: "Av. Júpiter",
            number: 307,
         },
         phone: "11 9 2376-3857",
         photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcSAb3WFCdc9SyrbqakssslIYN_2S_C8VkPg&usqp=CAU",
      },
   ];

   return (
      <div id="content-area">
         <PageTitle title="Associações Locais" />
         <div id="page-content">
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
