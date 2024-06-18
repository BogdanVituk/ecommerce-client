import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1'
})

export const authInstance = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1'
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;

    return config
}

authInstance.interceptors.request.use(authInterceptor)
