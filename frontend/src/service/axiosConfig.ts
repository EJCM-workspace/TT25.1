import axios from "axios";
import { AuthContextProvider } from "../contexts/AuthContext";

const URL = 'http://localhost:3333/';

const API = axios.create({
    baseURL: URL,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 5000,
    isAuthTokenRequired: false,
    expectedErrorReturn: null
});

/*----------------------------------------------------------------------------*/

API.interceptors.request.use(
    async config => {
        const authToken = sessionStorage.getItem('token');
        if(config.isAuthTokenRequired && !authToken) throw new Error('Token não existe ainda!');
        else config.headers.Authorization = `Bearer ${authToken}`;

        return config;
    },
    error => {
        console.log(error);
        return Promise.reject()
    }
);

API.interceptors.response.use(
    response => {
        const config = response.config;

        // Se tiver um função padrão, executa

        return response;
    },
    error => {
        const config = error.config;
        console.log(config.errorMessage);

        return config.expectedErrorReturn;
    }
);

/*----------------------------------------------------------------------------*/

export default API;