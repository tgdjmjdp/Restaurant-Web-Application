import {
    TOGGLE_SIDENAV,
    TOGGLE_MODAL_AUTH,
    TOGGLE_LOGIN_MODAL,
    TOGGLE_REGISTER_MODAL,
    TOGGLE_MODAL_FORM
} from '../types/navType'

const initialState = {
    sideNav: false,
    authModal: false,
    loginModal: true,
    registerModal: false,
    modalForm: false
}

export default function (state = initialState, action) {

    const { type } = action;

    switch (type) {
        case TOGGLE_SIDENAV:
            return {
                ...state,
                sideNav: !state.sideNav
            }
        case TOGGLE_MODAL_AUTH:
            return {
                ...state,
                authModal: !state.authModal
            }
        case TOGGLE_LOGIN_MODAL:
            return {
                ...state,
                loginModal: !state.loginModal
            }
        case TOGGLE_REGISTER_MODAL:
            return {
                ...state,
                registerModal: !state.registerModal
            }
        case TOGGLE_MODAL_FORM:
            return {
                ...state,
                loginModal: !state.loginModal,
            }
        default:
            return state;

    }
}