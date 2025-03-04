import ShortButton from '@/components/atoms/ShortButton/indext'
import ListCategory from '@/components/molecules/ListCategory'
import NavigationMenu from '@/components/molecules/NavegationMenu'
import DailyRoutes from '@/components/organism/DailyRoutes'
import MapScren from '@/components/organism/MapScreen'
import MyRoutes from '@/components/organism/MyRoutes'
import colors from '@/styles/colors'
import { IconNotification } from '@tabler/icons-react-native'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  const [categories , setCategories] = useState('Rotas de hoje')
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapScren />
      <NavigationMenu />
      <ShortButton
        path={'/person/index'}
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
          {categories === 'Rotas de hoje' &&
            <DailyRoutes/>
          }
          {categories === 'Minhas rotas' &&
            <MyRoutes/>
          }
        </View>
      </View>
    </SafeAreaView>
  )
}


const s = StyleSheet.create({
  listOfRoute_container: {
    position: 'absolute',
    height: "45%",
    width: "100%",
    paddingBottom: 0,
    bottom: 0,
  },

  flatList_container: { 
    paddingVertical: 24, 
    borderRadius: 18, 
    backgroundColor: colors.white, 
    alignItems: 'center', 
    gap: 8, 
  },

  bar: { width: "30%", height: 4, backgroundColor: colors.gray },
})