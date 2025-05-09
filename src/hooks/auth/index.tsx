import { useState } from "react"
import { router } from "expo-router";
import { EasyRouteApi } from "@/services/configApi";
import { storeUseData } from "@/utils/store";
import { Students, StudentsAPi } from "@/types/student";


export default function useAuth() {
    const [serverMessageError, setserverMessageError] = useState("");
    const [serverLoading, setLoading] = useState(false);

    const signUp = async (data: any) => {
        try {
            console.log(data)
            const postData = {
                name : data.name,
                gmail : data.email,
                phone : data.numero
            }
            
            setLoading(true);
            const response = await EasyRouteApi.post("students/", postData)
            
            if (response) {
                await storeUseData(response.data)
                router.push("/(studant)/home");
                setLoading(false);
                return
            }
        } catch (err: any) {
            setLoading(false);
            console.log(err)

            if (err.response) {
                setserverMessageError(err.response.data.menssage)
            } else if (err.request) {
                console.log('Sem resposta do servidor. Verifique sua conexão.');
            } else {
                console.log('Ocorreu um erro inesperado.' + err);
            }
        }
    }

    const signIn = async (data: Students) => {
        try {
            setLoading(true);
            const response = await EasyRouteApi.get('students/list/')
            console.log(response.data)
            
            if (response.data.success!) {
                throw new Error("Requisição falha")
            }

            const studentsList : StudentsAPi[] = response.data
            const currentStudent = studentsList.find( item => item.gmail === data.email || item.name === data.name)

            if(!currentStudent){
                throw new Error()
            }

            router.push("/(studant)/home");
            storeUseData(currentStudent)


        } catch (err: any) {
            setLoading(false);

            if (err.response) {
                setserverMessageError(err.response.data.message)
            } else if (err.request) {
                console.log('Sem resposta do servidor. Verifique sua conexão.');
            } else {
                console.log('Ocorreu um erro inesperado.');
            }
        }
    }



    return { signUp , signIn, serverMessageError, serverLoading }
}
