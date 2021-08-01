import axios from 'axios';

export const getUsers = () => {
    return axios.get('/api/users', {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    });
}

