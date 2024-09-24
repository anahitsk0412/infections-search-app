import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL,
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_BACK_TOKEN}`,
  },
  withCredentials: false,
});

export default axiosInstance;
