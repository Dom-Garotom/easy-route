import colors from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    notificationItem_cotainer: {
        width: "100%",
        alignItems: 'center',
        flexDirection: "row",
        gap: 16,
        padding: 8,
    },
    notificationItem_title: {
        color: colors.title,
        fontWeight: '600',
        fontSize: 14,
    },
    notificationItem_text: {
        width: "80%",
        color: colors.text,
        fontWeight: '500',
        fontSize: 12,
        flexWrap:"wrap",
    },
    notificationItem_textSoft: {
        color: colors.text,
        fontWeight: '400',
        fontSize: 12,
    },
})