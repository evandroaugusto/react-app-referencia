import axios from "axios";

export const clientHttp = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { "Some-Auth-Header": "token" },
});
