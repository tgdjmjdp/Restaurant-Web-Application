import {
    LOGIN_SUCCESS,
    REGISTER_SUCCESS
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
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                isRegistered: false,
                isLogin: true
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