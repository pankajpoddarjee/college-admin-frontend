import React,{useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

const api = axios.create({ 
  baseURL: 'http://localhost:4000/', // our API base URL
});

// Request interceptor for adding the bearer token
api.interceptors.request.use(
  (config) => { console.log("yyyy");
    const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    //return config;
  },
  (error) => {
    console.log("oooo");
    //return Promise.reject(error);
  }
);
console.log("pppp");
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
