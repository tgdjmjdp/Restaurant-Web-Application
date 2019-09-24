import {
    FOOD_ADD,
    FOOD_LOAD
} from '../types/foodType';

const initialState = {
    foodData: null,
}

export default function (state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case FOOD_ADD:
            return {
                ...state,
            }
        case FOOD_LOAD:
            return {
                ...state,
                foodData: payload
            }
        default:
            return state;

    }
}