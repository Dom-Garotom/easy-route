import colors from '@/styles/colors'
import { IconBusStop } from '@tabler/icons-react-native'
import React from 'react'
import { Text, View } from 'react-native'
import { s } from './style'

interface  NotificationItemProps {
    title : string ,
    description : string ,
    time : string 
}

export default function NotificationItem( { description , time , title} : NotificationItemProps ) {
    return (
        <View style={s.notificationItem_cotainer}>
            <IconBusStop size={28} color={colors.green} />
            <View>
                <Text style={s.notificationItem_title}>{title}</Text>
                <Text style={s.notificationItem_text}>{description}</Text>
                <Text style={s.notificationItem_textSoft}>{time}</Text>
            </View>
        </View>
    )
}