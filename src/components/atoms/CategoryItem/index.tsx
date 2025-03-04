import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./style";

type Props = PressableProps & {
    content: string
    isVisible: boolean
}
export default function CategoryItem({ content, isVisible, ...props }: Props) {

    return (
        <Pressable style={isVisible ? styles.visible : styles.container} {...props} >
            <Text style={isVisible ? styles.textVisible : styles.text}>{content}</Text>
        </Pressable>
    )
}