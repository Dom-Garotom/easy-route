import React, { ReactNode } from 'react'
import Button from '../Button'
import { StyleSheet } from 'react-native'
import { Href, router } from 'expo-router'
import colors from '@/styles/colors'

interface ShortButtonProps {
    text?: string,
    path?: Href
    children?: ReactNode,
    top?: number
    left?: number
    right?: number
    bottom?: number
    onClick?: () => void
}

export default function ShortButton({ path, children, bottom, left, right, top, onClick }: ShortButtonProps) {
    const handleClick = () => {
        path && router.push(path);
        onClick?.()
    }
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
            onPress={handleClick}
        >
            {children}
        </Button>
    )
}

const s = StyleSheet.create({
    button: {
        minWidth: 45,
        height: 45,
        position: "absolute",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        top: 10,
        left: 10,
        gap: 10,
        padding: 12,
        borderRadius: 10,
        backgroundColor: colors.green,
    },
})