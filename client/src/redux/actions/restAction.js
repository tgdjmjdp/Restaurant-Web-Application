import axios from 'axios';
import {
    REST_CREATE_FAILED,
    REST_CREATE_SUCCESS,
    REST_CLEAR,
    REST_GET_DATA,
    GET_MY_RESTS
} from '../types/restType'

export const createRest = ({

    restName

}) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'Application/json'
            }
        }

        const body = JSON.stringify({ restName });

        const rest = await axios.post('/api/rest/create', body, config);

        await dispatch({
            type: REST_CREATE_SUCCESS,
            payload: rest.data
        })

        return {
            rest
        }

    } catch (error) {

        dispatch({
            type: REST_CREATE_FAILED
        });

    }
}

export const clearRestState = () => async dispatch => {
    try {

        dispatch({
            type: REST_CLEAR
        });

    } catch (error) {
        console.log('====================================');
        console.log(error.message);
        console.log('====================================');
    }


}

export const getRestById = rest_id => async dispatch => {
    try {

        await dispatch({
            type: REST_CLEAR
        });

        const res = await axios.get('/api/rest/' + rest_id);

        await dispatch({
            type: REST_GET_DATA,
            payload: res.data
        });

        return {
            res
        }

    } catch (error) {
        console.log('====================================');
        console.log(error.message);
        console.log('====================================');
    }


}

export const getMyRests = () => async dispatch => {
    try {
        
        const res = await axios.post('/api/rest/my/');

        await dispatch({
            type: GET_MY_RESTS,
            payload: res.data
        })

        console.log('============= GET_MY_RESTS_SUCCESS =======================');
        console.log(res.data);
        console.log('====================================');

    } catch (error) {
        
        console.log('============== GET_MY_RESTS_FAILED ======================');
        console.log(error.message);
        console.log('====================================');

    }
}

