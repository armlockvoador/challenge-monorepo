import axios from 'axios'

const url = 'http://localhost:8080/api/post';

const api = axios.create({
    baseURL: url
});

export default api;