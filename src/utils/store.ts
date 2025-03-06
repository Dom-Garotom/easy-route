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


export const getUserData = async (): Promise<any | undefined> => {
    try {
        const data = await SecureStore.getItemAsync('user_data');
        if (data) {
            console.log('Dados recuperados com sucesso:', data);
            return JSON.parse(data); 
        }
        console.log('Nenhum dado encontrado.');
        return undefined;
    } catch (error) {
        console.error('Erro ao recuperar os dados:', error);
        return undefined;
    }
};
