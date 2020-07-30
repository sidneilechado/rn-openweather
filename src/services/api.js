import axios from 'axios';

import {API_KEY} from '../utils/OpenweatherKey';

const api = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/',
});

api.interceptors.request.use(config => {
  config.params = config.params || {};

  config.params.APPID = API_KEY;
  config.params.units = config.params.units || 'metric';

  return config;
});

export default api;
