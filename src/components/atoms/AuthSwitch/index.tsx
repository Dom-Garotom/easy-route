import { Href, router } from "expo-router";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"
import { styles } from "./style";

type Props = TouchableOpacityProps & {
    title: string
    subTitle: string
    route: Href
}

export default function AuthSwitch({ route, subTitle, title, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.authSwitch} activeOpacity={0.6} {...rest}
            onPress={() => router.navigate(route)}
        >
            <View style={{ gap: 6 }}>
                <Text style={styles.authSwitch_title}>{title}</Text>
                <Text style={styles.authSwitch_subTitle}>{subTitle}</Text>
            </View>
            <Icon name='angle-right' size={24} style={{ width: 24 }} />
        </TouchableOpacity>
    )
}
