import colors from "@/styles/colors";
import { StyleSheet } from "react-native";



export const s = StyleSheet.create({
    roadMapInfo_container: {
        position:"absolute",
        bottom: 20,
        left:10,
        right: 10,
        backgroundColor: colors.white,
        gap: 16,
        padding: 24,
        paddingBottom: 28,
        borderRadius: 16,
    },

    roadMapInfo_Title: {
        color: colors.title,
        fontWeight: '600',
        fontSize: 20,
        width: "70%"
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