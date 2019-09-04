import { toggleAuthModal } from '../types/authModalType'

const initialState = {
    loginForm: true,
    registerForm: false
}

export default function (state = initialState, action) {

    const { type } = action;

    switch (type) {
        case toggleAuthModal:
            return {
                loginForm: !loginForm,
                registerForm: !registerForm
            }
        default:
            return state;
    }
}