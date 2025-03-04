import colors from "@/styles/colors";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    color?: string,
    text: string,
    isLoading ?: boolean,
    isBlock?: boolean,
}

export default function ButtonDefault({ color = colors.green, text, isLoading  , isBlock , ...props }: Props) {
    return (
        <TouchableOpacity 
            style={[styles.button, { backgroundColor: color } , isLoading && styles.loading ,  isBlock && styles.block ]} 
            activeOpacity={0.7}
            disabled={isLoading || isBlock}
            {...props}
        >
            <Text style={styles.textButton}>
                {isLoading ? "Carregando..." : text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 4 ,
        maxHeight: 56,
        minHeight: 50,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: 'center',
        transitionDuration: "0.5"
    },

    block:{
        opacity: 0.8,
        backgroundColor: colors.danger,
    },

    loading:{
        opacity: 0.8,
    },

    textButton: {
        color: "white",
        fontWeight: '500',
        fontSize: 16,
    },
})
