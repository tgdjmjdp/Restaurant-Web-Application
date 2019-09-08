import axios from 'axios';
import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    USER_LOADED,
    AUTH_ERROR
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

        const res = await axios.post('http://localhost:5000/api/auth/register', body, config);

        console.log('====================================');
        console.log(res);
        console.log('====================================');

        dispatch({
            type: REGISTER_SUCCESS
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
        console.log("has token");

    } else {
        console.log('====================================');
        console.log("no token");
        console.log('====================================');
    }

    try {

        const res = await axios.get('http://localhost:5000/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });

    } catch (err) {

        console.log("cant get auth");

        console.log('====================================');
        console.log(err.response);
        console.log('====================================');

        dispatch({
            type: AUTH_ERROR
        });
    }
}

export const loginUser = ({ loginEmail, loginPassword }) => async dispatch => {

    const config = {

        headers: {
            'Content-Type': 'Application/json'
        }

    }

    console.log('============== LOGIN ======================');
    console.log(loginEmail);
    console.log('====================================');

    const body = JSON.stringify({ loginEmail, loginPassword });

    try {

        const res = await axios.post('http://localhost:5000/api/auth/', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());

    } catch (error) {

        const errors = error.reponse;

        return errors;

        /* if (errors) {
            errors.forEach(
                errors => dispatch(setAlert(errors.msg, 'danger'))
            );
        }
        dispatch({
            type: LOGIN_FAIL
        }); */
    }
}

/* export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
    const clear = dispatch({ type: CLEAR_PROFILE });
    if (clear){
        console.log('====================================');
        console.log("CLEAR PROFILE");
        console.log('====================================');
    }
} */