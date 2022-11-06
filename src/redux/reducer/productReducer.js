import { AddToCart } from "../constant"
const initialState = {
    value : 0
}

export const productReducer = (state=initialState, action) => {
    switch (action.type) {
        case AddToCart: return {
            ...state,
            value : state.value + 1
        }
        default : return state
    }
}