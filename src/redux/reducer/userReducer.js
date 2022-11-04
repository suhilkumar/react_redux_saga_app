import { ADD_USER } from "../constant"
const initialState = [];

let userReducer = (state = initialState, action) => {
switch (action.type){
    case ADD_USER :
        return  { ...state,
            user : action.payload,

    }
    default : 
    return  state
}
}


export {userReducer}
