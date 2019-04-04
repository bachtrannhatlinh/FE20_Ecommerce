import { combineReducers } from 'redux';
import shoppingCartReducer from './modules/shoppingCart/reducers';


//COMBINE MANY REDUCERS
const rootReducer = combineReducers({
    shoppingCartReducer,
});//đi gom các reducers về 

export default rootReducer;
