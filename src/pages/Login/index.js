import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import api from "../../services/api";

import {
   AreaLogin,
   AreaForm,
   AreaImagem,
   AreaInput,
   PageContent,
} from "./styles";

import logotipo from "../../assets/images/logotipo.jpg";

export default function Home() {
   const history = useHistory();
   const dispatch = useDispatch();

   const [email, setEmail] = useState("");
   const [senha, setSenha] = useState("");

   async function login() {
      const data = await api
         .post("sessions", { email, senha })
         .then((response) => {
            console.log(response.data.token);
            console.log(response.data.usuario);

            dispatch({
               type: "@usuarios/SET_TOKEN",
               payload: {
                  authUser: {
                     token: response.data.token,
                     id_usuario: response.data.usuario.id,
                     nome: response.data.usuario.nome,
                     funcao: response.data.usuario.funcao.descricao,
                  },
               },
            });
         });

      return data;
   }

   function handleSubmit(event) {
      event.preventDefault();

      login();

      history.push("/principal");
   }

   return (
      <Container>
         <PageContent>
            <AreaImagem>{/*}<img src={logotipo} alt="" />{*/}</AreaImagem>
            <AreaForm>
               <form onSubmit={handleSubmit}>
                  <label htmlFor="email" className="form-label">
                     E-mail
                  </label>
                  <input
                     type="text"
                     id="email"
                     className="form-control"
                     onChange={(event) => setEmail(event.target.value)}
                  />

                  <label htmlFor="senha">Senha</label>
                  <input
                     type="text"
                     id="senha"
                     className="form-control"
                     onChange={(event) => setSenha(event.target.value)}
                  />

                  <Button type="submit" className="btn btn-default btn-block">
                     Login
                  </Button>
               </form>
            </AreaForm>
         </PageContent>
      </Container>
   );
}
