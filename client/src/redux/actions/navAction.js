import {
    TOGGLE_SIDENAV,
    TOGGLE_MODAL_AUTH,
    TOGGLE_MODAL_FORM
} from '../types/navType';

export const toggleSideNav = () => dispatch => {
    dispatch({
        type: TOGGLE_SIDENAV,
    });
}

export const toggleModalAuth = () => dispatch => {
    dispatch({
        type: TOGGLE_MODAL_AUTH,
    });
}

export const toggleModalForm = () => dispatch => {
    dispatch({
        type: TOGGLE_MODAL_FORM,
    });
}