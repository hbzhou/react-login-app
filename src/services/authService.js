import axios from 'axios';

const registerUser = (user) => {
    return axios.post('/api/auth/register', user);
}

const login = (data) => {
    return axios.post('/api/auth/login', data);
}

const logout = () => {
    localStorage.removeItem("user");
}

const authService = {
    registerUser,
    login,
    logout
}
export default authService;

