import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://localhost:3001/api/all',
    baseURL: 'http://api.tvmaze.com/search/shows?q=start%20wars'
}); 

export default api;