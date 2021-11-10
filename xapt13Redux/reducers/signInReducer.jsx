import { SIGN_IN } from "../types/signTypes"

const initialState = {
    loading: true
}

export const signInReducer = (state = initialState, action) => {
    if(action.type === SIGN_IN) {
        return {
            ...state,
            ...action.payload
        }
    }

    return state;
}