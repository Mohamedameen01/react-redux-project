import { SET_PRODUCTS } from "./productTypes"

const initialState = {
    products: [
        {
            id: 1,
            name: "Mohamed Ameen",
            category: "Programmer"
        }
    ]
}
const productReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_PRODUCTS:
            return state
        default:
            return state
        }
}

export default productReducer