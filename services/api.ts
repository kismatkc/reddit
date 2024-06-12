import axios from "axios";

const API = axios.create({
  // baseURL:
  //   // "https://6c5face4-f39a-4b9f-ae3a-688bd9d91265-00-1eff5zyueznk1.riker.replit.dev:3000/api",

  baseURL: "http://localhost:4000/api",
});

export default API;
