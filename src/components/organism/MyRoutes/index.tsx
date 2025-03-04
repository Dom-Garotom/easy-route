
import { FlatList, Text } from 'react-native'
import { s } from './style'
import YourRoute from '@/components/molecules/YourRoute'
import { getPeriod } from '@/utils/getPeriod'
import { ApiYourRoutes } from '@/mocks/yourRoute'

export default function MyRoutes() {
  return (
    <FlatList
      data={ApiYourRoutes}
      keyExtractor={({ route_id }) => route_id}
      ListHeaderComponent={() =>
        <Text style={s.listOfRoute_description}>Explore as rotas nas quais você está cadastrado</Text>
      }
      renderItem={({ item }) =>
        <YourRoute
          title={item.title}
          route_id={item.route_id}
          period={getPeriod(item.going)}
          going={item.going}
          back={item.back}
        />
      }
      contentContainerStyle={{ paddingBottom: 36, gap: 16 }}
      style={s.flatList}
      showsVerticalScrollIndicator={false}
    />
  )
}
