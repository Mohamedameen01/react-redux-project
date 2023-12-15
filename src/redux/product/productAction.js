import { SELECTED_PRODUCTS, SET_PRODUCTS } from "./productTypes"

export const setProduct = () => {
    return{
        type: SET_PRODUCTS,
        payload: products
    }
}

export const selectProduct = () => {
    return{
        type: SELECTED_PRODUCTS,
        payload: products
    }
}

