import {ActionTypes} from'../constants/actionType'

const initState={
    products:[
        {
            id:1,
            title:'MAC Mini',
            category:"desktop",
        }
    ],
}


export const productsReducer=(state=initState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return state
        default:
            return state    


    }
}