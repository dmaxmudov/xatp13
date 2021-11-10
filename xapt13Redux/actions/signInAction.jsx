import axios from "axios";
import { toast } from "react-toastify";
import { API_PATH, SIGN_IN } from "../types/signTypes"


export const updateState = (data) => {
    return {
        type: SIGN_IN,
        payload: data
    }
}


export const handeClick = (event, error, value, click) => {
    
    axios.post(API_PATH +  'auth/register', value)
      .then((res) => {
        toast.success(res.data.message)
        click()
      })
      .catch((err) => {
        toast.error("Malumotlar noto'g'ri to'ldirilgan")
      })

}