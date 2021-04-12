const initial_state = {
   id_pedido: 0,
   itemsCart: [],
};

const reducer = (state = initial_state, action) => {
   let itemsCart = [...state.itemsCart];

   switch (action.type) {
      case '@cart/ADD_ITEM':
         itemsCart.push(action.payload.prod);

         return { ...state, itemsCart };

      default:
         return state;
   }
};

export default reducer;
