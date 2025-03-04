import colors from '@/styles/colors'
import React from 'react'
import { StyleSheet, View } from 'react-native'

type Props = {
    numbStage: number,
    stage: number,
}

export default function Stage({ numbStage, stage }: Props) {
    return (
        <View style={styles.stageContainer}>
            {Array.from({ length: numbStage }).map((e, index) => (
                <View key={index + 1} style={stage == index + 1 ? styles.currentStage : styles.stage}></View>
            ))}
        </View>
    )
}


const styles = StyleSheet.create({
    stageContainer: {
        flex: 1,
        gap: 6,
        maxHeight: 30,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    stage: {
        width: 15,
        height: 15,
        backgroundColor: colors.green,
        borderRadius: "100%",
    },

    currentStage: {
        width: 49,
        height: 15,
        backgroundColor: colors.green,
        borderRadius: 12,
    },
})