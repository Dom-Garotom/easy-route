import colors from '@/styles/colors'
import { StyleSheet, View } from 'react-native'

export default function Bar() {
    return (
        <View style={s.bar_container}></View>
    )
}

const s = StyleSheet.create({
    bar_container: {
        width: "100%",
        height: 1,
        backgroundColor: "#E1EBF4",
        marginVertical: 14
    }
})