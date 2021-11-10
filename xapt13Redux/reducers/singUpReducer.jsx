import { SIGN_UP } from "../types/signTypes"

const initialState = {
    loading: true
}

export const signUpReducer = (state = initialState, action) => {
    if(action.type === SIGN_UP) {
        return {
            ...state,
            ...action.payload
        }
    }

    return state;
}