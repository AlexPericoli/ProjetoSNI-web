const initial_state = {
   token: '',
   id_usuario: 0,
   nome: '',
   id_funcao: '',
   nome_funcao: '',
   id_perfil: 0,
   nome_perfil: '',
   id_assoc_local: 0,
   nome_local: '',
};

const reducer = (state = initial_state, action) => {
   let token;
   let nome;
   let id_al;
   let nome_al;
   let id_perfil;
   let nome_perfil;
   let id_funcao;
   let nome_funcao;
   let nome_local;

   switch (action.type) {
      case '@usuarios/SET_TOKEN':
         token = action.payload.token;
         nome = action.payload.nome;
         id_al = action.payload.id_assoc_local;
         nome_al = action.payload.nome_assoc_local;
         id_perfil = action.payload.id_perfil;
         nome_perfil = action.payload.nome_perfil;
         id_funcao = action.payload.id_funcao;
         nome_funcao = action.payload.nome_funcao;
         nome_local = action.payload.nome_local;

         return {
            ...state,
            token,
            nome,
            id_assoc_local: id_al,
            nome_assoc_local: nome_al,
            id_perfil,
            nome_perfil,
            id_funcao,
            nome_funcao,
            nome_local,
         };

      default:
         return state;
   }
};

export default reducer;
