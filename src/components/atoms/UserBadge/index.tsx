import colors from '@/styles/colors'
import { IconUsers } from '@tabler/icons-react-native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface UserBadgeProps {
    studentsNumber: number
}

export const UserBadge = ({ studentsNumber }: UserBadgeProps) => {
    return (
        <View style={s.userBadge_container}>
            <IconUsers color={"#195A33"} />
            <Text style={s.userBadge_text}>{studentsNumber}</Text>
        </View>
    )
}

const s = StyleSheet.create({
    userBadge_container: {
        width: 70,
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 12,
        gap: 10,
        backgroundColor: colors.greenSoft
    },
    userBadge_text: {
        color: colors.title,
        fontWeight: '500',
        fontSize: 16,
    },
})