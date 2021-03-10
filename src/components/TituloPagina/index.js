import { Container } from "./styles";

export default function TituloPagina({ titulo, subTitulo, corBarra }) {
   return (
      <Container corBarra={corBarra}>
         <h1>
            {titulo}
            {subTitulo && <span> {subTitulo}</span>}
         </h1>
      </Container>
   );
}
