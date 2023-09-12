import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import {axiosReq} from '../utils/apiCalls'

export const login = async (dispatch, user) =>{
    dispatch(loginStart());
    try {
        const res = await axiosReq.post("admin/login/", {
            username: user.username,
            password: user.password
        });
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}

export const register = async (dispatch, user) =>{
    dispatch(loginStart());
    try {
        const res = await axiosReq.post("admin/register/", {
            username: user.username,
            password: user.password
        });
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}