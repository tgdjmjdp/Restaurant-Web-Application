import axios from 'axios';

const setAuthToken = token => {

    if (token) {
        console.log('====================================');
        console.log('set token');
        console.log('====================================');
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete axios.defaults.headers.common['x-auth-token'];
        console.log('====================================');
        console.log('no token to set');
        console.log('====================================');
    }
};

export default setAuthToken;