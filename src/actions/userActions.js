import axios from 'axios';

export const register = (user) => {
    return dispatch => {
        return axios.post('/api/users/register', user);
    }
}

export const login = (data) => {
    return dispatch =>{
        return axios.post('/api/users/login', data);
    }
}




