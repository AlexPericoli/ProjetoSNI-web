import { combineReducers } from 'redux';

import cart from './cart';
import usuarios from './usuarios';

const reducers = combineReducers({
   cart,
   usuarios,
});

export default reducers;
