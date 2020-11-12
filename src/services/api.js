import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-3-87-184-79.compute-1.amazonaws.com:3000',
});

export default api;
