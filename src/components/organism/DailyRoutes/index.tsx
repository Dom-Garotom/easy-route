import RouterItem from '@/components/atoms/RouterItem'
import { FlatList, Text } from 'react-native'
import { s } from './style'
import { useEffect, useState } from 'react';
import { getAllRoutes } from '@/models/getAllRoutes';
import { Route } from '@/types/routerInfo';
import ApiRoutesMocks from '@/mocks/routerItem';
import { formatDurationMeasurement } from '@/utils/formateDurationMeasurement';

export default function DailyRoutes() {

 const [allRoutes, setAllRoutes] = useState<Route[]>([]);

  useEffect(() => {
    const fetchAllRoutes = async () => {
      const response = await getAllRoutes()

      if (response && response.length > 0){
        setAllRoutes(response)
        return;
      }

      alert('Não foi possivel achar a sua rota')
      return;
    }

    fetchAllRoutes()
  }, []);




  return (
          <FlatList
            data={allRoutes}
            keyExtractor={({ id }) => id.toString()}
            ListHeaderComponent={() =>
              <Text style={s.listOfRoute_description}>Visite  as rotas para Pau dos Ferros de hoje</Text>
            }
            renderItem={({ item }) =>
              <RouterItem
                id={item.id}
                title={item.name}
                description={item.description}
                period={item.timeGoing}
                measurement={formatDurationMeasurement(item.duration_measurement)}
                time={item.duration}
              />
            }
            contentContainerStyle={{ paddingBottom: 36, gap: 10 }}
            style={s.flatList}
            showsVerticalScrollIndicator={false}
          />
  )
}
