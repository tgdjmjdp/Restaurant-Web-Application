import { TOGGLE_AUTH_MODAL } from '../types/navType'

const initialState = {
    authModal: false,
    loginForm: true
}

export default function (state = initialState, action) {

    const { type } = action;

    switch (type) {
        case TOGGLE_AUTH_MODAL:
            return {
                ...state,
                authModal: !loginForm,
            }
        default:
            return state;
    }
}