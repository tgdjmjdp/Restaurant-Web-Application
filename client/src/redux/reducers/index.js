import { combineReducers } from 'redux';
import navReducer from './navReducer';
import authReducer from './authReducer';
import restReducer from './restReducer';
import foodReducer from './foodReducer';

export default combineReducers({
    foodReducer,
    navReducer,
    authReducer,
    restReducer
});