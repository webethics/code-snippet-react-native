import axios, { AxiosInstance, AxiosError } from 'axios';
import StorageServices from './async-storage/StorageServices';
import Config from 'react-native-config';

const api: AxiosInstance = axios.create({
  baseURL: Config.API_URL,
});
export const sourceCancelToken = axios.CancelToken.source();

api.interceptors.request.use(
  async (config) => {
    const token = await StorageServices.getStringValue('token');
    if (token) {
      config.headers!.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);


export default api;
