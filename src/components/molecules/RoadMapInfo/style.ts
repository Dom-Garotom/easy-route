import colors from "@/styles/colors";
import { StyleSheet } from "react-native";



export const s = StyleSheet.create({
    roadMapInfo_container: {
        backgroundColor: colors.white,
        width: "100%",
        gap: 16,
        padding: 24,
        paddingBottom: 28,
        borderRadius: 16,

        // // Sombra suave no iOS
        // shadowColor: "#000",
        // shadowOffset: { width: 0, height: 4 },
        // shadowOpacity: 0.1, // Opacidade baixa para suavizar
        // shadowRadius: 10, // Raio maior para difundir a sombra

        // // Sombra suave no Android
        // elevation: 100,
    },

    roadMapInfo_Title: {
        color: colors.title,
        fontWeight: '600',
        fontSize: 20,
    },

    roadMapInfo_timer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    roadMapInfo_text: {
        color: colors.text,
        fontWeight: '500',
        fontSize: 14,
    },

})