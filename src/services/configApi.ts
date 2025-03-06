import axios from "axios"

export const EasyRouteApi = axios.create({
    baseURL: 'https://easy-route-api-m97u.onrender.com/api/v1/',
    headers: {
        'Content-Type': 'application/json',
    },
})