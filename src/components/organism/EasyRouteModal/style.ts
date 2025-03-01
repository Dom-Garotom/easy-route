import {  StyleSheet } from 'react-native'
import colors from '@/styles/colors'

export const s = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: 'rgba(0,0,0,0.5)',
    },

    modal_container: {
        zIndex: 4,
        padding: 24,
        paddingBottom: 20,
        gap: 16,
        backgroundColor: colors.white,
        borderRadius: 24,
        borderEndEndRadius: 0 , 
        borderStartEndRadius: 0 , 
    },

    modal_title:{
        color: colors.title,
        fontWeight: '600',
        fontSize: 20,
    },

    modal_text:{
        color: colors.text,
        fontWeight: '500',
        fontSize: 14,
    },
})