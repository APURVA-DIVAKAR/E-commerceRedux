import {productsReducer, selectedProductsReducer} from "./reducer/productsReducer";
import { combineReducers, legacy_createStore as createStore ,compose,applyMiddleware} from "redux";
import thunk from 'redux-thunk'


const reducers = combineReducers({
    allProducts:productsReducer,
    product:selectedProductsReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)));

export default store;