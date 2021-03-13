import React from "react";

import PageTitle from "../components/PageTitle";
import Card from "../components/CardBooks";

export default function Books() {
   const array = [
      {
         id: 1,
         title: "A Verdade da Vida",
         vol: "12",
         edition: "6",
         author: "Massaharu Taniguchi",
         publisher: "Marian Books",
         cover:
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSO1bt5aIWCaUhvhv1cqW3rnaZ3kR2TT03glbSdlCvPlhIiF4iBjCKh5BmVH2hsdTLwI90yTOV8xw&usqp=CAc",
      },
      {
         id: 1,
         title: "A Verdade da Vida",
         vol: "12",
         edition: "6",
         author: "Massaharu Taniguchi",
         publisher: "Marian Books",
         cover:
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSO1bt5aIWCaUhvhv1cqW3rnaZ3kR2TT03glbSdlCvPlhIiF4iBjCKh5BmVH2hsdTLwI90yTOV8xw&usqp=CAc",
      },
      {
         id: 1,
         title: "A Verdade da Vida",
         vol: "12",
         edition: "6",
         author: "Massaharu Taniguchi",
         publisher: "Marian Books",
         cover:
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSO1bt5aIWCaUhvhv1cqW3rnaZ3kR2TT03glbSdlCvPlhIiF4iBjCKh5BmVH2hsdTLwI90yTOV8xw&usqp=CAc",
      },
      {
         id: 1,
         title: "A Verdade da Vida",
         vol: "12",
         edition: "6",
         author: "Massaharu Taniguchi",
         publisher: "Marian Books",
         cover:
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSO1bt5aIWCaUhvhv1cqW3rnaZ3kR2TT03glbSdlCvPlhIiF4iBjCKh5BmVH2hsdTLwI90yTOV8xw&usqp=CAc",
      },
      {
         id: 1,
         title: "A Verdade da Vida",
         vol: "12",
         edition: "6",
         author: "Massaharu Taniguchi",
         publisher: "Marian Books",
         cover:
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSO1bt5aIWCaUhvhv1cqW3rnaZ3kR2TT03glbSdlCvPlhIiF4iBjCKh5BmVH2hsdTLwI90yTOV8xw&usqp=CAc",
      },
   ];

   return (
      <div id="content-area">
         <PageTitle title="Livros" />
         <div id="page-content-2">
            {array.map((item, index) => (
               <Card
                  id={item.id}
                  vol={item.vol}
                  edition={item.edition}
                  author={item.author}
                  publisher={item.publisher}
                  cover={item.cover}
               />
            ))}
         </div>
      </div>
   );
}
