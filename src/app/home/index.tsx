import RouterItem from '@/components/atoms/RouterItem'
import ShortButton from '@/components/atoms/ShortButton/indext'
import MapScren from '@/components/organism/MapScreen'
import ApiRoutesMocks from '@/mocks/routerItem'
import colors from '@/styles/colors'
import { IconArrowLeft, IconNotification } from '@tabler/icons-react-native'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapScren/>
      <View style={s.listOfRoute_container}>
        <FlatList
          data={ApiRoutesMocks}
          keyExtractor={({ id }) => id}
          ListHeaderComponent={() => 
            <Text style={s.listOfRoute_description}>Visite  as rotas para Pau dos Ferros de hoje</Text>
          }
          renderItem={({ item }) =>
            <RouterItem
              id={item.id}
              title={item.name}
              description={item.description}
              period={item.going}
              measurement={item.duration_measurement}
              time={item.duration}
            />
          }
          contentContainerStyle={{ paddingBottom: 20 , gap:10}}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <ShortButton 
        path={'/notification'}
        left={20}
        top={20}
        >
        <IconNotification color={colors.white} />
      </ShortButton>

      <ShortButton 
        path={'/notification'}
        right={20}
        top={20}
        >
        <IconNotification color={colors.white} />
      </ShortButton>
    </SafeAreaView>
  )
}


const s = StyleSheet.create({
  listOfRoute_container: {
    position: 'absolute',
    bottom:0,
    height: "40%",
    padding: 24,
    paddingBottom: 0,
    gap: 10,
    borderRadius: 16,
    backgroundColor: colors.white,
  },
  listOfRoute_description: {
    color: colors.text,
    fontWeight: '500',
    fontSize: 16,
  },

})