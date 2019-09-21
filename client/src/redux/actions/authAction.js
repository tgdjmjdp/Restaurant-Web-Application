import axios from 'axios';
import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    CLEAR_PROFILE,
    LOGOUT,
    GET_MY_RESTS
} from '../types/authType'

import setAuthToken from '../../utils/setAuthToken'

export const registerUser = ({

    regUsername,
    regEmail,
    regPassword,

}) => async dispatch => {

    try {

        const config = {
            headers: {
                'Content-Type': 'Application/json'
            }
        }

        const body = JSON.stringify({ regUsername, regEmail, regPassword });

        await axios.post('/api/auth/register', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
        });

    } catch (error) {

        const errors = error.reponse;

        if (errors) {

            console.log('====================================');
            console.log(errors);
            console.log('====================================');

        }

        /* dispatch({
            type: REGISTER_FAIL
        }); */

    }
}

export const loadUser = () => async dispatch => {

    if (localStorage.token) {

        setAuthToken(localStorage.token);

    }

    try {

        const res = await axios.get('/api/auth/');

        await dispatch({
            type: USER_LOADED,
            payload: res.data
        });

         dispatch(getMyRests()); 
    } catch (err) {

        dispatch({
            type: AUTH_ERROR
        });
        
    }
}

export const getMyRests = () => async dispatch => {
    try {
        
        const res = await axios.post('/api/rest/my/');

        await dispatch({
            type: GET_MY_RESTS,
            payload: res.data
        })

    } catch (error) {
        
        console.log(error.message);

    }
}

export const loginUser = ({ loginEmail, loginPassword }) => async dispatch => {

    const config = {

        headers: {
            'Content-Type': 'Application/json'
        }

    }

    const body = JSON.stringify({ loginEmail, loginPassword });

    try {

        const res = await axios.post('/api/auth/', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        await dispatch(loadUser()); 

    } catch (error) {

        const errors = error.reponse;

        console.log(error);

        dispatch({
            type: LOGIN_FAIL
        });

        return errors;

    }
}

export const logoutUser = () => dispatch => {

    dispatch({ 
        type: LOGOUT 
    });

    const clear = dispatch({ 
        type: CLEAR_PROFILE 
    });

    if (clear){
        console.log('====================================');
        console.log("CLEAR PROFILE");
        console.log('====================================');
    }
}