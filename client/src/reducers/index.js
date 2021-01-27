import { combineReducers } from 'redux';
//importing a (named export) function called reducer from redux-form
//"as" means "reducer" will be imported into this file as formReducer 
import { reducer as formReducer }from "redux-form";

import authReducer from './authReducer';
import streamReducer from './streamReducer';

//dummy reducer
export default combineReducers(
    {
       auth: authReducer,
       form: formReducer,
       streams: streamReducer

    }
);