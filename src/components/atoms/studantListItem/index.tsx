import colors from '@/styles/colors'
import { truncateText } from '@/utils/truncate'
import { IconBusStop } from '@tabler/icons-react-native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


interface StudantListItemProps {
    name: string
    istitute: string
    studant_Id: string
    onTheBus: boolean
}

export default function StudantListItem({ istitute, name, onTheBus }: StudantListItemProps) {
    return (
        <View style={s.studentsListItem_container}>
            <View >
                <Text style={s.studentsListItem_name}>{name}</Text>
                <Text style={s.studentsListItem_institute}>Instituiçãos - {truncateText(istitute , 35)}</Text>
            </View>
            <IconBusStop color={onTheBus ? colors.greenSecondary : colors.danger} size={28} />
        </View>
    )
}


const s = StyleSheet.create({
    studentsListItem_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.gray,
    },

    studentsListItem_name: {
        color: colors.title,
        fontWeight: '600',
        fontSize: 14,
    },

    studentsListItem_institute: {
        color: colors.text,
        fontWeight: '500',
        fontSize: 12,
    },
})