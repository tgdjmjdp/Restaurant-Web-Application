import {
    FOOD_ADD
} from '../types/foodType';

const initialState = {
    foodState: null,
}

export default function (state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case FOOD_ADD:
            return {
                ...state,
            }
        default:
            return state;

    }
}