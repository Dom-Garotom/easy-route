import Bar from '@/components/atoms/Bar'
import Button from '@/components/atoms/Button'
import { SelectInstituteInput } from '@/components/atoms/SelectInstituteInput'
import NavigationMenu from '@/components/molecules/NavegationMenu'
import { EasyRouteModal } from '@/components/organism/EasyRouteModal'
import MapScren from '@/components/organism/MapScreen'
import colors from '@/styles/colors'
import { IconBuilding, IconClock, IconRoute, IconUsers } from '@tabler/icons-react-native'
import { router } from 'expo-router'
import { useState } from 'react'
import {Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { s } from './style'

export default function Driver() {
  const [isActive, setIsActive] = useState(false);

  const updateState = (state: boolean) => {
    setIsActive(state)
  }

  const options = ['if', 'uer', 'ufersa']



  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <MapScren />
        <NavigationMenu />
        <View style={s.listOfRoute_container}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity style={s.driverOptions_container} onPress={() => setIsActive(!isActive)}>
              <IconBuilding color={colors.title} />
              <Text>Instituições</Text>
            </TouchableOpacity>

            <View style={s.teste}>
              <Button styles={s.button} text='start' />
            </View>

            <TouchableOpacity style={s.driverOptions_container} onPress={() => router.push('/(driver)/studantsList')}>
              <IconUsers color={colors.title} />
              <Text>Estudantes</Text>
            </TouchableOpacity>
          </View>


          <View style={s.content}>
            <Text style={s.content_title}>Rota da manhã</Text>
            <Text style={s.content_text}>Essa rota sai do Encanto e passa pelas instituições da Ufersa , Uern e IfRN.</Text>
            <Bar />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={s.content_titleSoft}>Tempo estimado</Text>
              <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                <IconClock color={colors.title} />
                <Text style={s.content_text}>128min</Text>
              </View>
            </View>

            <View style={{ alignItems: 'center' }}>
              <Text style={s.content_titleSoft}>Distância</Text>
              <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                <IconRoute color={colors.title} />
                <Text style={s.content_text}>18Km</Text>
              </View>
            </View>
          </View>


        </View>
      </SafeAreaView>
      {isActive &&
        <EasyRouteModal.Container hasVisible={updateState} >
          <EasyRouteModal.Title title={'Lista de instituições'} />
          <EasyRouteModal.Text text={'Confirme aqui a entrega de todos os alunos das intituições da sua rota'} />
          <View style={{ gap: 4 }}>
            <SelectInstituteInput options={options} onSelect={alert} placeholder='Selecione as instituição' />
            <Button text='Alunos entregues' styles={{ backgroundColor: "#45525F" }} />
          </View>
        </EasyRouteModal.Container>
      }

    </>
  )
}