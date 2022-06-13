import { userConstants } from '../constants/userConstant';

export const user = (state = {}, action: any) => {
    switch (action.type) {
        case userConstants.USER_GETALL_REQUEST:
            return {
                loading: true
            };
        case userConstants.USER_GETALL_SUCCESS:
            return {
                items: action.data
            }
        case userConstants.USER_GETALL_FAILURE:
            return {
                error: action.error
            }
        default:
            return state;
    }
}