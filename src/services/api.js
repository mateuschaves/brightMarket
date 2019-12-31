import axios from 'axios';

const api = axios.create({
  baseURL: 'https://brightmarket.herokuapp.com',
});

export default api;
