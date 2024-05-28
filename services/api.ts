import axios from 'axios';

const API = axios.create({
    // baseURL: 'https://bede44aa-9c29-47dd-897b-2b4c010093e4-00-3nevvx7pojkg8.kirk.replit.dev:3000/api'
    baseURL: "http://localhost:4000/api"
});

export default API;
