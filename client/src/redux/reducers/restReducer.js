import {
    REST_CREATE_SUCCESS,
    REST_CREATE_FAILED,
    REST_CLEAR,
    REST_GET_DATA
} from '../types/restType';

const initialState = {
    restCreated: false,
    restData: null
}

export default function (state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case REST_GET_DATA:
            return {
                restCreated: false,
                restData: payload
            }
        case REST_CLEAR:
            return {
                restCreated: false,
                restData: null
            }
        case REST_CREATE_FAILED:
            return {
                ...state,
                restCreated: false,
            }
        case REST_CREATE_SUCCESS:
            return {
                ...state,
                restCreated: true,
                restData: payload
            }
        default:
            return state;

    }
}