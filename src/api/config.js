import axios from 'axios';
import qs from 'qs';

export const baseURL = 'http://example.com';

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  responseType: 'json',
  // withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
})

axiosInstance.interceptors.request.use(config => {
  if(
    config.method === 'post' ||
    config.method === 'put' ||
    config.method === 'delete'
  ) {
    config.data = qs.stringify(config.data)
  }
  // 若是有做鉴权token , 就给头部带上token
  // if (localStorage.token) {
  //   config.headers.Authorization = localStorage.token;
  // }
  return config;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(response => {
  return response.data;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

export {
  axiosInstance
}