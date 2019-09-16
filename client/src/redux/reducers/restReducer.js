import {
    REST_CREATE_SUCCESS,
    REST_CREATE_FAILED,
    REST_CLEAR,
    REST_GET_DATA,
    GET_MY_RESTS
} from '../types/restType';

const initialState = {
    restCreated: false,
    restData: null,
    myRestList: []
}

export default function (state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case GET_MY_RESTS:
            return {
                ...state,
                myRestList: payload
            }
        case REST_GET_DATA:
            return {
                ...state,
                restCreated: false,
                restData: payload
            }
        case REST_CLEAR:
            return {
                ...state,
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