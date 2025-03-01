import React from 'react'
import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native'
import { s } from './style'

interface ButtonProps {
    text: string
    styles: StyleProp<ViewStyle>
}

export default function Button({ styles, text }: ButtonProps) {
    return (
        <TouchableOpacity style={[s.button_container, styles]} activeOpacity={0.9}>
            <Text style={s.button_text}>{text}</Text>
        </TouchableOpacity>
    )
}
