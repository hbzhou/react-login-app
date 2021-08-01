import axios from 'axios';
import JwtHeader from "./JwtHeader";

const getUsers = () => {
    return axios.get('/api/users', {
        headers: JwtHeader()
    });
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
}

const userService = {
    getCurrentUser,
    getUsers
}

export default userService;

