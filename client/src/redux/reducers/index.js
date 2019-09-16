import { combineReducers } from 'redux';
import navReducer from './navReducer';
import authReducer from './authReducer';
import restReducer from './restReducer'
export default combineReducers({
    navReducer,
    authReducer,
    restReducer
});