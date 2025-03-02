import React, { Children, ReactNode } from 'react'
import { StyleProp, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native'
import { s } from './style'

interface ButtonProps extends TouchableOpacityProps {
    text?: string
    styles?: StyleProp<ViewStyle>
    children ?: ReactNode
}

export default function Button({ styles, text  , children , ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={[s.button_container, styles]} activeOpacity={0.9} {...rest}>
            {text && <Text style={s.button_text}>{text}</Text>}
            {children}
        </TouchableOpacity>
    )
}
