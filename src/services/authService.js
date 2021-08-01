import axios from 'axios';

const registerUser = (user) => {
    return axios.post('/api/auth/register', user);
}

const login = (data) => {
    return axios.post('/api/auth/login', data);
}

const authService = {
    registerUser,
    login
}
export default authService;

