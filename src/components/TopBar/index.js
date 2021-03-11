import { LinkText } from "./styles";
import { useSelector } from "react-redux";

import { IoLogOutSharp } from "react-icons/fa";

import logotipo from "../../assets/images/logotipo.jpg";

//import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "bootstrap/dist/css/bootstrap.min.css";

import "../../assets/styles/fonts.css";

export default function TopBar() {
   const authUser = useSelector((state) => state.usuarios.authUser);

   return (
      <div>
         <Row className="align-items-center">
            <div
               style={{
                  height: "120px",
                  margin: 0,
                  padding: 0,
               }}
            >
               <div style={{ width: "150px" }}>
                  <img src={logotipo} width="100%" alt="" />
               </div>
            </div>
         </Row>
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
      </div>
   );
}
