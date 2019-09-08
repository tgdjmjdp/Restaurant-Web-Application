import { combineReducers } from 'redux';
import navReducer from './navReducer';
import authReducer from './authReducer';
export default combineReducers({
    navReducer,
    authReducer
});