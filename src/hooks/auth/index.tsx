// import { useState } from "react"
// import { router } from "expo-router";
// import { storeToken } from "@/src/utils/token/store";


// export default function useAuth() {
//     const [serverMessageError, setserverMessageError] = useState("");
//     const [serverLoading, setLoading] = useState(false);

//     const signUp = async (data: object) => {
//         try {
//             setLoading(true);
//             const response = await artiSphereApi.post("/register", data)

//             if (response.data.success) {
//                 storeToken(response.data.token.toString())
//                 setLoading(false);
//                 router.push("/(studant)/home");
//                 return
//             }

//         } catch (err: any) {
//             setLoading(false);

//             if (err.response) {
//                 setserverMessageError(err.response.data.menssage)
//             } else if (err.request) {
//                 console.log('Sem resposta do servidor. Verifique sua conexão.');
//             } else {
//                 console.log('Ocorreu um erro inesperado.');
//             }
//         }
//     }

//     const signIn = async (data: object) => {
//         try {
//             setLoading(true);
//             const response = await artiSphereApi.post("/login", data)
            
//             if (response.data.success) {
//                 storeToken(response.data.token.toString())
//                 setLoading(false);
//                 router.push("/home");
//                 return
//             }

//         } catch (err: any) {
//             setLoading(false);

//             if (err.response) {
//                 setserverMessageError(err.response.data.message)
//             } else if (err.request) {
//                 console.log('Sem resposta do servidor. Verifique sua conexão.');
//             } else {
//                 console.log('Ocorreu um erro inesperado.');
//             }
//         }
//     }



//     return { signUp , signIn, serverMessageError, serverLoading }
// }
