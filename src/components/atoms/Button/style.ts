import colors from "@/styles/colors";
import { StyleSheet } from "react-native";


export const s = StyleSheet.create({

    button_container: {
        height: 48,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        padding: 10,
        backgroundColor: colors.green,
    },
    button_text: {
        color: colors.white,
        fontWeight: '500',
        fontSize: 16,
    },
})