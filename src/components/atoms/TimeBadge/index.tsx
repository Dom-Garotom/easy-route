import colors from '@/styles/colors'
import { IconClock } from '@tabler/icons-react-native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function TimeBadge({ text }: { text: string }) {
    return (
        <View style={s.container}>
            <IconClock color={colors.green} />
            <Text>{text}</Text>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
    }
})