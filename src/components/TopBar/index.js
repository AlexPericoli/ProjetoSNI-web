import { Container, LinkText } from "./styles";
import { useSelector } from "react-redux";

import logotipo from "../../assets/images/logotipo.jpg";

import { FiArrowLeft } from "react-icons/fi";

export default function TopBar() {
   const authUser = useSelector((state) => state.usuarios.authUser);

   return (
      <Container>
         <div className="cabecalho">
            <img src={logotipo} alt="" />
            <h1>Sistema Seicho No Ie</h1>
            <div className="info_usuario">
               {/*}
               <p>
                  Bem-vindo, <strong>Alexandre Marian</strong>
               </p>
               <p>segunda-feira, 26 de outubro de 2020</p>
               {*/}
            </div>
         </div>
         <div className="menu">
            <div>
               <LinkText to="/">Home</LinkText>
            </div>
            <div>
               <LinkText to="/regionais">Regionais</LinkText>
            </div>
            <div>
               <LinkText to="/preletores">Preletores</LinkText>
            </div>
            <div>Consultas</div>
            <div>Livraria</div>
         </div>
      </Container>
   );
}
