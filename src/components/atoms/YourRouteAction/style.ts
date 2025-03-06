import colors from "@/styles/colors";
import { StyleSheet } from "react-native";


export const s = StyleSheet.create({
    yourRouteAction_container: {
        // width: "100%",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        padding: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.gray,
    },

    yourRouteAction_title: {
        width:"100%",
        color: colors.title,
        fontWeight: '600',
        fontSize: 14,
    },
    yourRouteAction_text: {
        color: colors.text,
        fontWeight: '500',
        fontSize: 12,
    },
})