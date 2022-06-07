import { ActionTypes } from '../constants/actionType'
import shopApi from '../../apis/shopApi'

export const setProducts=products=>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct=product=>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}


export const removeSelectedProduct=()=>{
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }

}
export const fetchProducts=()=>{
    return async function (dispatch) {
        try{
            const res = await shopApi.get(`/products`)
            dispatch({
                type:ActionTypes.FETCH_PRODUCTS,
                payload:res.data
            })
        }
        catch(err){
            console.log(err)
        }
    }
    
}
export const fetchProduct=id=>{
    return async function (dispatch) {
        try{
            const res = await shopApi.get(`/products/${id}`)
            dispatch({
                type:ActionTypes.SELECTED_PRODUCT,
                payload:res.data
            })
        }
        catch(err){
            console.log(err)
        }
    }
    
}