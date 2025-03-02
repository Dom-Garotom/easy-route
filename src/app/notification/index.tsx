import Button from '@/components/atoms/Button'
import NotificationItem from '@/components/atoms/NotificationItem'
import { NotificationMock } from '@/mocks/notificationItem'
import colors from '@/styles/colors'
import { IconArrowLeft } from '@tabler/icons-react-native'
import { router } from 'expo-router'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default function Notificaion() {
    return (
        <View style={s.notificaion_container}>
            <FlatList
                data={NotificationMock}
                keyExtractor={({ id }) => id}
                ListHeaderComponent={() =>
                    <>
                        <Button style={s.button} onPress={() => router.back()}>
                            <IconArrowLeft color={colors.white} />
                        </Button>
                        <Text style={s.notification_title}>Notificações</Text>
                    </>
                }
                renderItem={({ item }) =>
                    <NotificationItem
                        title={item.title}
                        time={item.time}
                        description={item.description}
                    />
                }
                ListHeaderComponentStyle={{ alignItems: 'center' , justifyContent:'center', marginVertical: 20 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const s = StyleSheet.create({
    header: {
        width: "100%",
        justifyContent: 'center',
    },
    notification_title: {
        color: colors.title,
        fontWeight: '600',
        fontSize: 24,
    },
    notificaion_container: {
        flex: 1,
        padding: 20,
    },
    button: {
        position: "absolute",
        top: -5,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height:45,
        width: 45,
        backgroundColor: colors.green,
        borderRadius: 10,
    },
})
