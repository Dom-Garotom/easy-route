import { FlatList } from "react-native";
import CategoryItem from "@/components/atoms/CategoryItem";
import { style } from "./style";

type Props = {
    onChange: (categories: string) => void
    isSelected: string
}

export default function ListCategory({ onChange, isSelected }: Props) {
    return (
        <FlatList
            data={categories}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
                <CategoryItem
                    content={item.content}
                    key={item.id}
                    isVisible={isSelected === item.content}
                    onPress={() => onChange(item.content)}
                />
            }
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={style.container}
            style={style.componente}
        />
    )
}

const categories = [
    {
        id: "01",
        content: "Rotas de hoje",
    },

    {
        id: "02",
        content: "Minhas rotas",
    },
    {
        id: "03",
        content: "Rotas da semana",
    },
]