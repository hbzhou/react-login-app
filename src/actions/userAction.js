import axios from 'axios';

export const registerUser = (user) => {
    return dispatch => {
        return axios.post('/api/auth/register', user);
    }
}

export const login = (data) => {
    return dispatch => {
        return axios.post('/api/auth/login', data);
    }
}

export const getUsers = () => {
    return dispatch => {
        return axios.get('/api/users', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        });
    }
}




