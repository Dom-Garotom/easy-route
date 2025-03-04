import { Text, View } from "react-native";
import { s } from "./style";
import YourRouteAction from "@/components/atoms/YourRouteAction";

interface YourRouteProps {
  route_id: string 
  title: string
  period: string
  going ?: string
  back ?: string
}

export default function YourRoute({ going , back , route_id , period, title }: YourRouteProps) {
  return (
    <View style={s.yourRoute_container}>
      <View>
        <Text style={s.yourRoute_title}>{title}</Text>
        <Text style={s.yourRoute_text}>{period}</Text>
      </View>
      <View style={{ gap: 8 }}>
        {going &&
          <YourRouteAction  
          route_id={route_id}
            hasGoing
            title={title}
            time={going}
          />
        }
        {back &&
          <YourRouteAction  
            route_id={route_id}
            hasGoing={false}
            title={title}
            time={back}
          />
        }
      </View>
    </View>
  )
}
