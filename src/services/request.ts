import axios, { AxiosRequestConfig } from 'axios'

export const requestApi = async <T>(
    url: string,
    method: 'get' | 'post' | 'put' | 'delete' = 'get',
    data?: unknown,
    config?: AxiosRequestConfig,
): Promise<T | { error: any }> => {
    try {
        const response = await axios({
            url: `${url}`,
            method: method,
            data: data,
            ...config,
        })

        return response.data
    }

    catch (error) {
        return { error }
    }
}