import ApiRoutesMocks from '@/mocks/routerItem'
import RouterItem from '@/components/atoms/RouterItem'
import { FlatList, Text } from 'react-native'
import { s } from './style'

export default function DailyRoutes() {
  return (
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
  )
}
