import { Text, TouchableOpacity, View } from 'react-native'
import { getPeriod } from '@/utils/getPeriod'
import { s } from './style'
import { router } from 'expo-router'
import { truncateText } from '@/utils/truncate'

interface RouterItemProps {
    id: number,
    title: string,
    period: string,
    description: string,
    time: number,
    measurement: string
}

export default function RouterItem({ id, description, measurement, period, time, title }: RouterItemProps) {
    const handleClick = () => {
        router.push(`/route/${id}` as `/route/[id]`)
    }

    return (
        <TouchableOpacity activeOpacity={0.6} style={s.routeItem_container} onPress={handleClick}>
            <View >
                <Text style={s.routeItem_title}>{title}</Text>
                <Text style={s.routeItem_text}>{getPeriod(period)}</Text>
                <Text style={s.routeItem_text}>{truncateText(description, 40)}</Text>
            </View>
            <View style={{ alignItems: "center" }}>
                <Text style={s.routeItem_time}>{time}</Text>
                <Text style={s.routeItem_text}>{measurement}</Text>
            </View>
        </TouchableOpacity>
    )
}
