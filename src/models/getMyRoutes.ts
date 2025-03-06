import { EasyRouteApi } from "@/services/configApi";

export type MyRouteApi = {
  id: number;                
  name: string;              
  timeGoing: string;          
  timeBack: string;           
  going: boolean;            
  back: boolean;             
}


export const getMyRoute = async (student_id: string) => {
  try {
    const response = await EasyRouteApi.get(`students/list/${student_id}/routes/`);

    if (!response.data) {
      throw new Error("Nenhuma rota encontrada para este estudante.");
    }

    const routesWithStatus = await Promise.all(
      response.data.map(async (item) => {
        try {
          const routeResponse = await EasyRouteApi.get(`/routes/list/${item.route}/`);

          if (!routeResponse.data) {
            return null;
          }

          return {
            id: item.route,
            name: routeResponse.data.name,
            timeGoing: routeResponse.data.timeGoing,
            timeBack: routeResponse.data.timeBack,
            going: item.going,
            back: item.back,
          };
        } catch (error) {
          console.error(`Erro ao buscar rota ${item.route}:`, error);
          return null;
        }
      })
    );

    const validRoutes : MyRouteApi[] = routesWithStatus.filter((route) => route !== null);

    return validRoutes;

  } catch (err: any) {
    console.error("Erro ao buscar rotas do usuário:", err);

    if (err.response) {
      console.error("Erro na resposta:", err.response.data.message || "Sem mensagem");
    } else if (err.request) {
      console.error("Sem resposta do servidor. Verifique sua conexão.");
    } else {
      console.error("Ocorreu um erro inesperado:", err);
    }


    return [];
  }
};
