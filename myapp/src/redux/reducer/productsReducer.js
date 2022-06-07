import {ActionTypes} from'../constants/actionType'

const initState={
    products:[ ],
}


export const productsReducer=(state=initState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
            case ActionTypes.FETCH_PRODUCTS:
                return {
                    ...state,
                    products: payload
                }
        default:
            return state    


    }
}

export const selectedProductsReducer = (state={},{type,payload})=>{
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            return{
                ...state,
                ...payload
            }
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return{}
            default:return state
    }
}
