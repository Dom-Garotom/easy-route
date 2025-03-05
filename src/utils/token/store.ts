import * as SecureStore from "expo-secure-store"

export const storeToken = async (token: string) => {
    try {
        await SecureStore.setItem(
            'user_token', 
            token
        );
        console.log('Token armazenado com segurança.');
    } catch (error) {
        console.error('Erro ao salvar o token:', error);
    }
};