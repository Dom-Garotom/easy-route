import { IconArrowBarLeft, IconArrowBarRight, IconArrowsMaximize } from '@tabler/icons-react-native'
import { Text, TouchableOpacity, View } from 'react-native'
import colors from '@/styles/colors'
import { s } from './style'

interface YourRouteActionProps {
    route_id : string
    title: string
    time: string
    hasGoing: boolean
}

export default function YourRouteAction({ hasGoing = true, time, title }: YourRouteActionProps) {
    return (
        <TouchableOpacity activeOpacity={0.6} style={s.yourRouteAction_container}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                {hasGoing ?
                    (<IconArrowBarRight color={colors.green} size={28} />)
                    :
                    (<IconArrowBarLeft color={colors.danger} size={28} />)
                }
                <View>
                    <Text style={s.yourRouteAction_title}>{title}</Text>
                    <Text style={s.yourRouteAction_text}>{time}</Text>
                </View>
            </View>
            <IconArrowsMaximize color={colors.title} size={26} />
        </TouchableOpacity>
    )
}