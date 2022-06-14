import axios from "axios";
import { baseUrl, baseHeader } from "../config/config";
import { UserCreateDef } from "../pages/auth/interface";

const login = (email: string, password: string) => {
    const url = `${baseUrl}api/v1/token/`;
    return axios.post(url, JSON.stringify({ username: email, password: password }), { headers: baseHeader })
        .then(response => {
            localStorage.setItem('_mv_user', JSON.stringify(response.data));
        });


}

const register = (user: UserCreateDef) => {
    const url = `${baseUrl}api/v1/registration/`;
    return axios.post(url, JSON.stringify(user), { headers: baseHeader });
}

const logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem('_mv_user');
}


export const userService = {
    login,
    logout,
    register,
};