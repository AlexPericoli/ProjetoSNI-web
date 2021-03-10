const initial_state = {
   authUser: {
      token: "",
      id_usuario: 0,
      nome: "",
      funcao: "",
   },
};

const reducer = (state = initial_state, action) => {
   switch (action.type) {
      case "@usuarios/SET_TOKEN":
         const authUser = action.payload.authUser;

         return { ...state, authUser };

      default:
         return state;
   }
};

export default reducer;
