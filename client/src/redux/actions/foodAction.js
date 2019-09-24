import axios from 'axios';
import {
    FOOD_ADD
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