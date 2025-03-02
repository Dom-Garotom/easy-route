import colors from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    main: {
        flex: 1,
        gap: 0,
        backgroundColor: "#000"
    },


    // estilos do cover 
    shadow: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        elevation: 5,
    },
    header_container: {
        width: "100%",
        height: 232,
        backgroundColor: colors.gray,

    },
    header_content: {
        width: "100%",
        padding: 20,
        paddingTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        backgroundColor: colors.green,
        borderRadius: 10,
    },


    // estilos do corpo da página
    content: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 30,
        paddingTop: 40,
        gap: 16,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    content_title: {
        color: colors.title,
        fontWeight: '600',
        fontSize: 20,
        marginBottom: 12
    },
    content_titleSoft: {
        color: colors.text,
        fontWeight: '700',
        fontSize: 16,
        marginBottom: 10,
    },
    content_text: {
        color: colors.text,
        fontWeight: '500',
        fontSize: 14,
    },
})