import axios from "axios"

export const EasyRouteApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/',
    headers: {
        'Content-Type': 'application/json',
    },
})