import {
    TOGGLE_SIDENAV,
    TOGGLE_AUTH_MODAL,
    TOGGLE_SWITCH_MODAL
} from '../types/navType';

export const toggleSideNav = () => dispatch => {
    dispatch({
        type: TOGGLE_SIDENAV,
    });
}

export const toggleAuthModal = () => dispatch => {
    dispatch({
        type: TOGGLE_AUTH_MODAL,
    });
}

export const toggleSwitchModal = () => dispatch => {
    dispatch({
        type: TOGGLE_SWITCH_MODAL,
    });
}