import axios from 'axios';

export default axios.create({
    baseURL: 'https://focavest-backend.onrender.com/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});
