import colors from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,

        backgroundColor: colors.white,
    },

    text: {
        color: colors.text,
    },

    textVisible: {
        color: "#fff",
        fontWeight: "600"
    },

    visible: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,

        backgroundColor: colors.green,
    }
})