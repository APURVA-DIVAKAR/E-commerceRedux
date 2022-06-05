import {productsReducer} from "./reducer/productsReducer";
import { combineReducers, legacy_createStore as createStore ,compose} from "redux";


const reducers = combineReducers({
    allProducts:productsReducer
})

const store = createStore(reducers,{},compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;