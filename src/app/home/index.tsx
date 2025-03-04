import RouterItem from '@/components/atoms/RouterItem'
import ShortButton from '@/components/atoms/ShortButton/indext'
import ListCategory from '@/components/molecules/ListCategory'
import NavigationMenu from '@/components/molecules/NavegationMenu'
import MapScren from '@/components/organism/MapScreen'
import ApiRoutesMocks from '@/mocks/routerItem'
import colors from '@/styles/colors'
import { IconNotification } from '@tabler/icons-react-native'
import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  const [categories , setCategories] = useState('')
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapScren />
      <NavigationMenu />
      <ShortButton
        path={'/notification'}
        top={20}
        right={10}
      >
        <IconNotification color={colors.white} />
      </ShortButton>

      <View style={s.listOfRoute_container}>
        <ListCategory
          onChange={(categoria) => setCategories(categoria)}
          isSelected={categories}
        />

        <View style={s.flatList_container}>
          <View style={s.bar} />
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
            contentContainerStyle={{ paddingBottom: 36, gap: 10 }}
            style={s.flatList}
            showsVerticalScrollIndicator={false}
          />

          {/* transforma em componente e renderiza a depender do button */}



        </View>
      </View>
    </SafeAreaView>
  )
}


const s = StyleSheet.create({
  listOfRoute_container: {
    position: 'absolute',
    height: "45%",
    paddingBottom: 0,
    bottom: 0,
  },

  listOfRoute_description: {
    color: colors.text,
    fontWeight: '500',
    fontSize: 16,
  },

  flatList_container: { 
    paddingVertical: 24, 
    borderRadius: 18, 
    backgroundColor: colors.white, 
    alignItems: 'center', 
    gap: 18, 
  },

  flatList: {
    padding: 24,
    paddingBottom: 0,
    borderRadius: 16,
    backgroundColor: colors.white,
  },

  bar: { width: "30%", height: 4, backgroundColor: colors.gray },
})