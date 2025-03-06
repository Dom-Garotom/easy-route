import { requestApi } from "@/services/request";
import { Route } from "@/types/routerInfo";


export const getAllRoutes = async (): Promise<Route[] | undefined> => {
    try {
        const url = `https://easy-route-api-m97u.onrender.com/api/v1/routes/list/`;
        const allRoutesResponse = await requestApi<any>(url, "get" , {} , {
            headers: {
              "Accept": "application/json",
              "X-CSRFTOKEN": "Gk9l0Y7hSkoIusyMMDp4j58AvsNo0yQsueZE3UFdRQDwD4DUed2sSIJ1d7kp1QWB"
            },
            withCredentials: true // Se precisar de autenticação por cookies
          }          
        )

        if (allRoutesResponse) {
            console.log(allRoutesResponse)
            return allRoutesResponse
        }

    } catch (error) {
        console.error("Erro ao buscar rota:", error);
        return undefined
    }
}