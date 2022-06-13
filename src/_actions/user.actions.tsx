import { history } from "../_helpers/history";
import { userService } from "../_services/user.service";
import { userConstants } from "../constants/userConstant";
import { alertActions } from "./alert.actions";
import { UserCreateDef } from "../pages/auth/interface";

const login = (email: string, password: string) => {
    return (dispatch: any) => {
        userService.login(email, password)
            .then(
                (user: any) => {
                    dispatch(success(user));
                    window.location.href = "/";
                },
                (error: any) => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user: any) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user: any) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error: any) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}


const register = (user: UserCreateDef) => {
    return (dispatch: any) => {

        userService.register(user)
            .then(
                (user: any) => {
                    dispatch(success(user));
                    dispatch(alertActions.success("Registration completed! Now you can login!"));
                },
                (error: any) => {
                    dispatch(failure(error));
                    if (error.response.data.hasOwnProperty("rapid_api_key")) {
                        dispatch(alertActions.error("Invalid Rapid API Key"));
                    }
                    if (error.response.data.hasOwnProperty("password")) {
                        dispatch(alertActions.error("Invalid password"));
                    }
                    if (error.response.data.hasOwnProperty("email")) {
                        dispatch(alertActions.error("Invalid email"));
                    }
                    if (error.response.data.hasOwnProperty("detail")) {
                        dispatch(alertActions.error(error.response.data.detail));
                    }


                }
            );
    };

    function success(user: any) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error: any) { return { type: userConstants.LOGIN_FAILURE, error } }
}


const getUserList = () => {
    return async (dispatch: any) => {
        return await userService.getUserList();
    };

    function success(data: any) { return { type: userConstants.USER_GETALL_SUCCESS, data } }
    function failure(error: any) { return { type: userConstants.USER_GETALL_FAILURE, error } }
}

export const userActions = {
    login,
    logout,
    register,
    getUserList
};