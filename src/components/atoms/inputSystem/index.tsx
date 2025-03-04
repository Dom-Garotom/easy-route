import colors from '@/styles/colors';
import React from 'react'
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native'

type Props = TextInputProps;

export default function InputSystem( { ...props } : Props) {
  return (
    <View style={styles.input}>
      <TextInput {...props} />
    </View>
  )
}


const styles = StyleSheet.create({
  input: {
    flex: 1,
    maxHeight: 50,
    minHeight: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    justifyContent: 'center',
    borderColor: colors.gray,
  },
})