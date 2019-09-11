import {
    TOGGLE_SIDENAV,
    TOGGLE_AUTH_MODAL,
    TOGGLE_SWITCH_MODAL
} from '../types/navType'

import {
    USER_LOADED
} from '../types/authType'

const initialState = {
    sideNav: false,
    authModal: false,
    switchModal: false,
}

export default function (state = initialState, action) {

    switch (action.type) {
        case TOGGLE_SIDENAV:
            return {
                ...state,
                sideNav: !state.sideNav
            }
        case USER_LOADED:
            return {
                ...state,
                authModal: false,
                switchModal: false,
            }
        case TOGGLE_AUTH_MODAL:
            return {
                ...state,
                authModal: !state.authModal,
                sideNav: false
            }
        case TOGGLE_SWITCH_MODAL:
            return {
                ...state,
                switchModal: !state.switchModal,
            }
        default:
            return state;

    }
}