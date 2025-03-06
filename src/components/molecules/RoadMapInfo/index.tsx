import { UserBadge } from '@/components/atoms/UserBadge'
import colors from '@/styles/colors'
import { IconClock } from '@tabler/icons-react-native'
import React from 'react'
import { Text, View } from 'react-native'
import { s } from './style'

interface RoadMapInfoProps {
    title: string
    studentsNumber: number
    going: string
    back: string
}

export default function RoadMapInfo({ back, going, studentsNumber, title }: RoadMapInfoProps) {
    return (
        <View style={s.roadMapInfo_container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={s.roadMapInfo_Title}>{title}</Text>
                <UserBadge studentsNumber={studentsNumber} />
            </View>

            <View style={s.roadMapInfo_timer}>
                <IconClock color={colors.greenSecondary} />
                <Text style={s.roadMapInfo_text}>Saída : {going}</Text>
            </View>

            <View style={s.roadMapInfo_timer}>
                <IconClock color={colors.greenSecondary} />
                <Text style={s.roadMapInfo_text}>Volta : {back}</Text>
            </View>
        </View>
    )
}
