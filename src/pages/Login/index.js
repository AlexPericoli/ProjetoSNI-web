import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import api from "../../services/api";

import {
   AreaLogin,
   AreaForm,
   AreaImagem,
   AreaInput,
   Container,
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
         <div className="conteudo_pagina">
            <AreaLogin>
               <AreaImagem>
                  <img src={logotipo} alt="" />
               </AreaImagem>
               <AreaInput>
                  <AreaForm>
                     <form onSubmit={handleSubmit}>
                        <label htmlFor="email">E-mail</label>
                        <input
                           type="text"
                           id="email"
                           onChange={(event) => setEmail(event.target.value)}
                        />

                        <label htmlFor="senha">Senha</label>
                        <input
                           type="text"
                           id="senha"
                           onChange={(event) => setSenha(event.target.value)}
                        />

                        <div>
                           <button type="submit">LOGIN</button>
                        </div>
                     </form>
                  </AreaForm>
               </AreaInput>
            </AreaLogin>
         </div>
      </Container>
   );
}
