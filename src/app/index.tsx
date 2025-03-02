import Button from '@/components/atoms/Button'
import { router } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

export default function index() {
  return (
    <View style={{flex:1, padding: 20 , justifyContent:'center' , alignItems: 'center'}}>
      <Text>Next page</Text>
        <Button text='Click' onPress={() => router.navigate("/home")}/>
    </View>
  )
}
