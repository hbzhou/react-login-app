import axios from 'axios';

export const registerAction = (user) => {
    return dispatch => {
        return axios.post('/api/users/register', user);
    }
}


