import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { s } from './style'

interface RouterItem {
    title : string ,
    period : string ,
    description : string,
    time : number,
    measurement : string
}

export default function RouterItem( {description , measurement , period , time , title} : RouterItem) {
    return (
        <TouchableOpacity activeOpacity={0.6} style={s.routeItem_container}>
            <View >
                <Text style={s.routeItem_title}>{title}</Text>
                <Text style={s.routeItem_text}>{period}</Text>
                <Text style={s.routeItem_text}>{description}</Text>
            </View>
            <View style={{ alignItems: "center" }}>
                <Text style={s.routeItem_time}>{time}</Text>
                <Text style={s.routeItem_text}>{measurement}</Text>
            </View>
        </TouchableOpacity>
    )
}
