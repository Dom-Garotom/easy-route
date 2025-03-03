import Bar from '@/components/atoms/Bar'
import Button from '@/components/atoms/Button'
import ListTitle from '@/components/atoms/ListTitle'
import TimeBadge from '@/components/atoms/TimeBadge'
import colors from '@/styles/colors'
import { IconArrowLeft, IconMapPin } from '@tabler/icons-react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { ImageBackground, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { s } from './style'
import ApiRoutesMocks from '@/mocks/routerItem'
import ShortButton from '@/components/atoms/ShortButton/indext'
export default function RouteDatails() {
    const { id } = useLocalSearchParams()
    const currentRoute = ApiRoutesMocks.find(item => item.id === id);



    return (
        <SafeAreaView style={s.main}>
            <ImageBackground source={{ uri: "https://portal.ifrn.edu.br/media/images/51467_Campus_Pau_dos_Ferros_nao_tera_expedient.width-500.jpg" }} style={s.header_container}>
                <View style={s.shadow}>
                    <View style={s.header_content}>
                        <ShortButton path={`/home`}
                            left={20}
                            top={20}
                        >
                            <IconArrowLeft color={colors.white} />
                        </ShortButton>
                        <Text style={{fontSize:20 , color:colors.white , fontWeight:'700'}}>{currentRoute?.name}</Text>
                        <ShortButton
                            path={`/mapRoute/${id}`}
                            right={20}
                            top={20}
                        >
                            <IconMapPin color={colors.white} />
                        </ShortButton>
                    </View>
                </View>
            </ImageBackground>

            <View style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false} style={s.content}>
                    <Text style={s.content_title}>{currentRoute?.name}</Text>
                    <Text style={s.content_text}>{currentRoute?.description}</Text>
                    <View>
                        <Bar />
                        <Text style={s.content_titleSoft}>Informações do ônibus</Text>
                        <Text style={s.content_text}>motorista : {currentRoute?.bus.driver}</Text>
                        <Text style={s.content_text}>capacidade : {currentRoute?.bus.capacityStudents}</Text>
                        <Text style={s.content_text}>modelo : {currentRoute?.bus.model}</Text>
                        <Text style={s.content_text}>Placa : {currentRoute?.bus.plate}</Text>
                    </View>

                    <View >
                        <Bar />
                        <Text style={s.content_titleSoft}>Horários de saída e de volta</Text>
                        <TimeBadge text={currentRoute?.going!} />
                        <TimeBadge text={currentRoute?.back!} />
                        <ListTitle title='Número de alunos' studentsNumber={currentRoute?.confirmedStudants!} />
                    </View>

                </ScrollView>
            </View>
            <View style={{ padding: 30, backgroundColor: colors.white }}>
                <Button text='Me inscrever' />
            </View>
        </SafeAreaView>
    )
}
