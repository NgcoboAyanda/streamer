import { combineReducers } from 'redux';

import authReducer from './authReducer';

//dummy reducer
export default combineReducers(
    {
       auth: authReducer
    }
);