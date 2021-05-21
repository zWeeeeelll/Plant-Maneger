import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.2.251:3335',

});

export default api;