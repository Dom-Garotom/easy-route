import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { UserBadge } from '../UserBadge'
import colors from '@/styles/colors'

interface ListTitleProps {
    title : string ,
    studentsNumber : number
}

export default function ListTitle( { studentsNumber , title} : ListTitleProps) {
    return (
        <View style={s.listTitle_container}>
            <Text style={s.listTitle_text}>{title}</Text>
            <UserBadge studentsNumber={studentsNumber} />
        </View>
    )
}


const s = StyleSheet.create({
    listTitle_container: {
        width: "100%",
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-between',
    },

    listTitle_text: {
        color: colors.title,
        fontWeight: '600',
        fontSize: 16,
    },
})