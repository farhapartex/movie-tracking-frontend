import { alertConstants } from "../constants/alertConstants";

const success = (message: any) => {
    return { type: alertConstants.SUCCESS, message };
}

const error = (message: any) => {
    return { type: alertConstants.ERROR, message };
}

const clear = () => {
    return { type: alertConstants.CLEAR };
}

export const alertActions = {
    success,
    error,
    clear
};