import axios from 'axios';
import {
    FOOD_ADD,
    FOOD_LOAD
} from '../types/foodType'

export const foodAdd = ({

    foodName,
    foodPrice,
    foodType,
    restID

}) => async dispatch => {

    try {

        const config = {
            headers: {
                'Content-Type': 'Application/json'
            }
        }

        const body = JSON.stringify({ restID, foodName, foodPrice, foodType });

        console.log(body);

        const food = await axios.post('/api/food/add', body, config);

        dispatch({
            type: FOOD_ADD,
        });

        return food

    } catch (error) {

        return error.message

    }

}

export const loadFood = restID => async dispatch => {
    try {
        const config = {
            headers: { 'Content-Type': 'Application/json' }
        }
        const body = JSON.stringify({ restID });
        console.log('================ BODY ====================');
        console.log(restID);
        console.log('====================================');
        const food = await axios.post('/api/food/load', body, config);
        dispatch({
            type: FOOD_LOAD,
            payload: food.data
        });
        return true
    } catch (error) {
    }
}