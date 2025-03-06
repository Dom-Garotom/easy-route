import { EasyRouteApi } from "@/services/configApi";
import { router } from "expo-router";

export const getMyRoute = async (
  student_id: string,
) => {
  try {
    const response = await EasyRouteApi.post(`students/list/${student_id}/routes/`);

    if (response) {
    }
  } catch (err: any) {
    console.log("Erro ao tentar registrar na rota:", err);

    if (err.response) {
      console.log("Erro na resposta:", err.response.data.message || "Sem mensagem");
    } else if (err.request) {
      console.log("Sem resposta do servidor. Verifique sua conexão.");
    } else {
      console.log("Ocorreu um erro inesperado:", err);
    }
  }
};
