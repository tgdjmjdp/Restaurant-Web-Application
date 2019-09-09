import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    USER_LOADED
} from '../types/authType';

import {
    TOGGLE_SWITCH_MODAL
} from '../types/navType';

const initialState = {
    token: localStorage.getItem('token'),
    isLogin: false,
    isRegistered: false,
}

export default function (state = initialState, action) {

    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenicated: true,
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                isRegistered: false,
                isLogin: true
            }
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isLogin: false,
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isRegistered: true
            }
        case TOGGLE_SWITCH_MODAL:
            return {
                ...state,
                isRegistered: false
            }
        default:
            return state;

    }
}