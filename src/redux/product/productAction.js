import { SELECTED_PRODUCTS, SET_PRODUCTS } from "./productTypes"


export const setProduct = (products) => {
    return{
        type: SET_PRODUCTS,
        payload: products
    }
}

export const selectProduct = (products) => {
    return{
        type: SELECTED_PRODUCTS,
        payload: products
    }
}




