import axios from "axios";
import { toast } from "react-toastify";
import { API_PATH, SIGN_UP, TOKEN_NAME } from "../types/signTypes"
import { useNavigate } from "react-router-dom";

export const updateState = (data) => {
    return {
        type: SIGN_UP,
        payload: data
    }
}

export const handleClick = (event, error, value) => {
    axios.post(API_PATH + 'auth/login', value)
        .then((res) => {
            localStorage.setItem(TOKEN_NAME, res.data.token)
            toast.success(res.data.status);
            useNavigate('/profile')
        })
}
