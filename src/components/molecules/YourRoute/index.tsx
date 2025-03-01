import { Text, View } from "react-native";
import { s } from "./style";
import { ReactNode } from "react";

interface YourRouteProps {
  title: string
  period: string
  children: ReactNode
}

export default function YourRoute({ children, period, title }: YourRouteProps) {
  return (
    <View style={s.yourRoute_container}>
      <View>
        <Text style={s.yourRoute_title}>{title}</Text>
        <Text style={s.yourRoute_text}>{period}</Text>
      </View>
      <View style={{ gap: 8 }}>
        {children}
      </View>
    </View>
  )
}
