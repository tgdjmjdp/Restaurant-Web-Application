import { OPEN, CLOSE } from '../types/navType'

const initialState = {
    sidebarOpen: false
}

export default function (state = initialState, action) {

    const { type } = action;

    switch (type) {
        case OPEN:
            return {
                sidebarOpen: true
            }
        case CLOSE:
            return {
                sidebarOpen: false
            }
        default:
            return state;

    }
}