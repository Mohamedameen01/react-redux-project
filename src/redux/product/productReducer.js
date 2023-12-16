import { SELECTED_PRODUCTS, SET_PRODUCTS } from "./productTypes"

const initialState = {
    products: [],  
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case SELECTED_PRODUCTS:
            return {
              ...state,
              products: action.payload  
            }
        
        default:
            return state
        }
}

export default productReducer