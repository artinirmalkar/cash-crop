import axios from "axios";

const API_CONFIG = {
    // baseURL: 'http://localhost:3000/',
    baseURL: 'http://192.168.29.85:9000/admin/auth',
}

const apiService = axios.create({
    baseURL : API_CONFIG.baseURL
})


export {apiService}


