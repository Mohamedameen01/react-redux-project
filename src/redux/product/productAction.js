import { REMOVE_SELECTED_PRODUCTS, SELECTED_PRODUCTS, SET_PRODUCTS } from "./productTypes"


export const setProduct = (products) => {
    return{
        type: SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (products) => {
    return{
        type: SELECTED_PRODUCTS,
        payload: products
    }
}






