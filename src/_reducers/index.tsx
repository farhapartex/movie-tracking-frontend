import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';
import { user } from './user.reducer';
import { movie } from './movie.reducer';

const rootReducer = combineReducers({
    authentication,
    alert,
    user,
    movie
});

export default rootReducer;