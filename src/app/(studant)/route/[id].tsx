import Bar from '@/components/atoms/Bar'
import Button from '@/components/atoms/Button'
import ListTitle from '@/components/atoms/ListTitle'
import TimeBadge from '@/components/atoms/TimeBadge'
import colors from '@/styles/colors'
import { IconArrowLeft, IconMapPin } from '@tabler/icons-react-native'
import { useLocalSearchParams } from 'expo-router'
import { ImageBackground, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { s } from './style'
import ShortButton from '@/components/atoms/ShortButton/indext'
import { useEffect, useState } from 'react'
import { EasyRouteModal } from '@/components/organism/EasyRouteModal'
import { getRouteDetails } from '@/models/getRoutesDetails'
import { Route } from '@/types/routerInfo'

export default function RouteDatails() {
    const { id } = useLocalSearchParams()
    const [routes, setRoutes] = useState<Route>();
    const [isActive, setIsActive] = useState(false);

    const updateState = (state: boolean) => {
        setIsActive(state)
    }

    useEffect(() => {
        const fetchAllRoutes = async () => {
            const response = await getRouteDetails(id.toString())

            if (response) {
                setRoutes(response)
                return;
            }

            alert('Não foi possivel achar a sua rota')
            return;
        }

        fetchAllRoutes()
    }, [id]);

    return (
        <>
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
                            <Text style={{ fontSize: 20, color: colors.white, fontWeight: '700' }}>Detalhes da rota</Text>
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
                        <Text style={s.content_title}>{routes?.name}</Text>
                        <Text style={s.content_text}>{routes?.description}</Text>
                        <View>
                            <Bar />
                            <Text style={s.content_titleSoft}>Informações do ônibus</Text>
                            <Text style={s.content_text}>motorista : {routes?.bus[0].driver}</Text>
                            <Text style={s.content_text}>capacidade : {routes?.bus[0].capacityStudents}</Text>
                            <Text style={s.content_text}>modelo : {routes?.bus[0].model}</Text>
                            <Text style={s.content_text}>Placa : {routes?.bus[0].plate}</Text>
                        </View>

                        <View >
                            <Bar />
                            <Text style={s.content_titleSoft}>Horários de saída e de volta</Text>
                            <TimeBadge text={routes?.timeGoing!} />
                            <TimeBadge text={routes?.timeBack!} />
                            <ListTitle title='Número de alunos' studentsNumber={routes?.confirmedStudents!} />
                        </View>

                    </ScrollView>
                </View>
                <View style={{ padding: 30, backgroundColor: colors.white }}>
                    <Button onPress={() => setIsActive(!isActive)} text='Me inscrever' />
                </View>
            </SafeAreaView>
            {isActive &&
                <EasyRouteModal.Container hasVisible={updateState} >
                    <EasyRouteModal.Title title={routes?.name!} />
                    <EasyRouteModal.Text text={'Por favor selecione como você pretende se inscrever nessa rota '} />
                    <View style={{ gap: 4 }}>
                        <Button text='Eu vou e volto' styles={{ backgroundColor: colors.greenSecondary }} />
                        <Button text='Eu vou mas não volto' styles={{ backgroundColor: colors.green }} />
                        <Button text='Apenas volto' styles={{ backgroundColor: "#f56565" }} />
                    </View>
                </EasyRouteModal.Container>
            }
        </>
    )
}
