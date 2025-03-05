import axios from "axios"

export const EasyRouteApi = axios.create({
    baseURL: 'localhost:8000',
    headers: {
        'Content-Type': 'application/json',
    },
})