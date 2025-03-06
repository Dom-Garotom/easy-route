import * as SecureStore from "expo-secure-store"

export const storeUseData = async (data: string) => {
    try {
        await SecureStore.setItem(
            'user_data', 
            JSON.stringify(data)
        );
        console.log('Dados armazenado com segurança.');
    } catch (error) {
        console.error('Erro ao salvar o dados:', error);
    }
};