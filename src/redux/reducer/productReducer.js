import { AddToCart, RemoveFromCart, Reset } from "../constant"
const initialState = {
    value : 0
}

export const productReducer = (state=initialState, action) => {
    switch (action.type) {
        case AddToCart: return {
            ...state,
            value : state.value + 1
        }
        case RemoveFromCart: return {
            ...state,
            value : state.value - 1
        }
        case Reset: return {
            ...initialState
        }
        default : return state
    }
}