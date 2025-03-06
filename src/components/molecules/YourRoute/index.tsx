import { Text, View } from "react-native";
import { s } from "./style";
import YourRouteAction from "@/components/atoms/YourRouteAction";

interface YourRouteProps {
  route_id: string 
  title: string
  period: string
  going : boolean
  back : boolean
  timeGoing : string
  timeBack : string
}

export default function YourRoute({ going , back , route_id , period, title , timeBack , timeGoing }: YourRouteProps) {
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
            title={"Ida"}
            time={timeGoing}
          />
        }
        {back &&
          <YourRouteAction  
            route_id={route_id}
            hasGoing={false}
            title={"Volta"}
            time={timeBack}
          />
        }
      </View>
    </View>
  )
}
