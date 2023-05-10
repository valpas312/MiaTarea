import axios from "axios";

const BASE_URL = "http://localhost:4000"

// Axios create 
export const useAxios = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-type": "application/json"
    }
});
