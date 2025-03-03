import React, { ReactNode } from 'react'
import Button from '../Button'
import { StyleSheet, TouchableOpacityProps } from 'react-native'
import { Href, router } from 'expo-router'
import colors from '@/styles/colors'

interface ShortButtonProps extends TouchableOpacityProps {
    text?: string,
    path: Href
    children?: ReactNode,
    top?: number
    left?: number
    right?: number
    bottom?: number
}

export default function ShortButton({ path, children, bottom, left, right, top, ...rest }: ShortButtonProps) {
    return (
        <Button
            style={[
                s.button,
                {
                    top: top,
                    left: left,
                    right: right,
                    bottom: bottom
                }
            ]}
            onPress={() => router.push(path)}
            {...rest}
        >
            {children}
        </Button>
    )
}

const s = StyleSheet.create({
    button: {
        position: "absolute",
        top: 10,
        left: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 45,
        backgroundColor: colors.green,
        borderRadius: 10,
    },
})