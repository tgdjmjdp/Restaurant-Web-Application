import { OPEN, CLOSE } from '../types/navType';

export const openSideBar = (open) => dispatch => {

    if (open === false) {
        dispatch({
            type: OPEN,
        });
    } else {
        dispatch({
            type: CLOSE,
        });
    }

}