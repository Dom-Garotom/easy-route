import React from 'react'
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import RouterItem from '@/components/atoms/RouterItem'
import colors from '@/styles/colors'
import YourRoute from '@/components/molecules/YourRoute'
import Button from '@/components/atoms/Button'
import Bar from '@/components/atoms/Bar'
import ListTitle from '@/components/atoms/ListTitle'
import NotificationItem from '@/components/atoms/NotificationItem'
import RoadMapInfo from '@/components/molecules/RoadMapInfo'
import { EasyRouteModal } from '@/components/organism/EasyRouteModal'

export default function HomeScreen() {
  return (
    <SafeAreaView style={s.s}>
      <Text>Componentes</Text>
      <ScrollView style={{ marginVertical: 20 }}>
        <RouterItem />
        <Bar />
        <YourRoute />
        <Bar />
        <Button />
        <ListTitle />
        <NotificationItem />
        <RoadMapInfo />
      </ScrollView>


      <EasyRouteModal.Container>
        <EasyRouteModal.Title title='Route 01' />
        <EasyRouteModal.Text text='Por favor selecione como você pretende se inscrever nessa rota ' />
        <View style={{ gap: 8 }}>
          <Button text='Testando o button ' styles={{backgroundColor: colors.danger}}/>
          <Button text='Testando o button ' styles={{backgroundColor: colors.greenDark}}/>
          <Button text='Testando o button ' styles={{backgroundColor: colors.green}}/>
          <Button text='Testando o button ' styles={{backgroundColor: colors.greenSoft}}/>
          
        </View>
      </EasyRouteModal.Container>

    </SafeAreaView>
  )
}



const s = StyleSheet.create({
  s: {
    padding: 20,
    backgroundColor: "#ffebec"
  },



  modal: {

    flex: 1,
    justifyContent: "flex-end",
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },



  roadMapInfo_container: {
    backgroundColor: colors.white,
    width: "100%",
    gap: 16,
    padding: 24,
    paddingBottom: 28,
    borderRadius: 16,

    // Sombra suave no iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1, // Opacidade baixa para suavizar
    shadowRadius: 10, // Raio maior para difundir a sombra

    // Sombra suave no Android
    elevation: 100,
  },

  roadMapInfo_Title: {
    color: colors.title,
    fontWeight: '600',
    fontSize: 20,
  },

  roadMapInfo_timer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  roadMapInfo_text: {
    color: colors.text,
    fontWeight: '500',
    fontSize: 14,
  },


  notificationItem_cotainer: {
    width: "100%",
    alignItems: 'center',
    flexDirection: "row",
    gap: 16,
    padding: 8,
  },

  notificationItem_title: {
    color: colors.title,
    fontWeight: '600',
    fontSize: 12,
  },
  notificationItem_text: {
    color: colors.title,
    fontWeight: '500',
    fontSize: 12,
  },
  notificationItem_textSoft: {
    color: colors.text,
    fontWeight: '400',
    fontSize: 12,
  },






  yourRoute_container: {
    width: "100%",
    padding: 12,
    gap: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.gray,
  },

  yourRoute_title: {
    color: colors.title,
    fontWeight: '600',
    fontSize: 16,
  },
  yourRoute_text: {
    color: colors.text,
    fontWeight: '500',
    fontSize: 14,
  },



})