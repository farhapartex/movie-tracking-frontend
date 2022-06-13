import { movieConstants } from '../constants/movieConstant';

export const movie = (state = {}, action: any) => {
    switch (action.type) {
        case movieConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case movieConstants.GETALL_SUCCESS:
            return {
                items: action.data
            }
        case movieConstants.GETALL_FAILURE:
            return {
                error: action.error
            }
        default:
            return state;
    }
}