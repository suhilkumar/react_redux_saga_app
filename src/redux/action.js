import { AddToCart, RemoveFromCart, Reset } from './constant'
export const addToCart = () => {
    return {
        type : AddToCart,
    }
}

export const removeFromCart = () => {
    return {
        type  : RemoveFromCart,
    }
}

export const resetCart = () => {
    return {
        type  : Reset,
    }
}