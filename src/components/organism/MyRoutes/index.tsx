
import { FlatList, Text } from 'react-native'
import { s } from './style'
import YourRoute from '@/components/molecules/YourRoute'
import { getPeriod } from '@/utils/getPeriod'
import { getMyRoute, MyRouteApi } from '@/models/getMyRoutes'
import { useEffect, useState } from 'react'
import { getUserData } from '@/utils/store'
import { Route } from '@/types/routerInfo'
import { StudentRoute } from '@/types/student'

export default function MyRoutes() {
  const [dataRoutes , setDataRoutes] = useState<MyRouteApi[]>([])



  useEffect(() => {
    const fetchAllRoutes = async () => {
      const userData = await getUserData()

      if(!userData){
        return
      }

      const routes = await getMyRoute(userData?.id.toPrecision())
      if (routes.length > 0){
        setDataRoutes(routes)
      }
    }

    fetchAllRoutes()
  }, []);

console.log("\n\n\n\n")
  console.log(dataRoutes)

  
  return (
    <FlatList
      data={dataRoutes}
      keyExtractor={({ id }) => id.toString()}
      ListHeaderComponent={() =>
        <Text style={s.listOfRoute_description}>Explore as rotas nas quais você está cadastrado</Text>
      }
      renderItem={({ item }) => (
        <YourRoute
          title={item.name}
          route_id={item.id.toString()}
          period={getPeriod(item.timeGoing)}
          going={item.going}  
          back={item.back}    
          timeBack={item.timeBack}
          timeGoing={item.timeGoing}
        />
      )}
      contentContainerStyle={{ paddingBottom: 36, gap: 16 }}
      style={s.flatList}
      showsVerticalScrollIndicator={false}
    />
  )
}
