import { EasyRouteApi } from "@/services/configApi";
import { router } from "expo-router";

export const registerInRoute = async (
  student_id: string,
  route_id: string,
  going: boolean,
  back: boolean
) => {
  try {
    const response = await EasyRouteApi.post(
      `students/list/${student_id}/routes/list/${route_id}/`,
      {
        onBus: false,
        going,
        back,
      }
    );


    if (response) {
      alert("Cadastro na rota realizado com sucesso!");
      router.navigate('/(studant)/home')
    } else {
      alert("Falha no cadastro na rota. Verifique a resposta.");
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
