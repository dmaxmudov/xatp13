import { combineReducers } from "redux";
import { signInReducer } from "./signInReducer";
import { signUpReducer } from "../reducers/singUpReducer";


export const rootReducer = combineReducers({
    signIn: signInReducer,
    signUp: signUpReducer
})