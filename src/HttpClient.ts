import axiosBase from 'axios';
export const client = axiosBase.create({
  baseURL: 'http://localhost:4000', // バックエンドB のURL:port を指定する
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'  
});
