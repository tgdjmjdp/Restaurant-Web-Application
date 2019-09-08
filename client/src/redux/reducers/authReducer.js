import {
    LOGIN_SUCCESS,
    REGISTER_SUCCESS
} from '../types/authType';

import {
    TOGGLE_SWITCH_MODAL
} from '../types/navType';

const initialState = {
    isLogin: false,
    isRegistered: false,
}

export default function (state = initialState, action) {

    switch (action.type) {
        case LOGIN_SUCCESS:
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