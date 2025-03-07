import { IconArrowBarLeft, IconArrowBarRight, IconArrowsMaximize } from '@tabler/icons-react-native'
import { Text, TouchableOpacity, View } from 'react-native'
import colors from '@/styles/colors'
import { s } from './style'
import { EasyRouteModal } from '@/components/organism/EasyRouteModal'
import { useState } from 'react'
import Button from '../Button'
import { getUserData } from '@/utils/store'
import { EasyRouteApi } from '@/services/configApi'

interface YourRouteActionProps {
    route_id: string
    title: string
    time: string
    hasGoing: boolean
}

export default function YourRouteAction({ hasGoing, time, title, route_id }: YourRouteActionProps) {
    const [isActive, setIsActive] = useState(false);

    const updateState = (state: boolean) => {
        setIsActive(state)
    }

    const handleCLick = async (onBus: boolean, comeBack: boolean) => {
        try {
            const userData = await getUserData()
            if (!useState) {
                alert("Não foi possivel realizar a interação")
                return
            }

            let actionData;

            actionData = {
                "onbus": onBus,
                "going": comeBack,
                "back": comeBack
            }

            const response = await EasyRouteApi.patch(`students/list/${userData?.id}/routes/${route_id}/update/`, actionData)

            if (!response.data) {
                throw new Error()
            }


        } catch (error) {
            console.log("Error \n\n\ ")
            console.log(error)
            return
        }
    }


    return (
        <>
            <TouchableOpacity activeOpacity={0.6} onPress={() => setIsActive(!isActive)} style={s.yourRouteAction_container}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    {hasGoing ?
                        (<IconArrowBarRight color={colors.greenSecondary} size={28} />)
                        :
                        (<IconArrowBarLeft color={colors.danger} size={28} />)
                    }
                    <View>
                        <Text style={s.yourRouteAction_title}>{title}</Text>
                        <Text style={s.yourRouteAction_text}>{time}</Text>
                    </View>
                </View>
                <IconArrowsMaximize color={colors.title} size={26} />
            </TouchableOpacity>
            {isActive &&
                <EasyRouteModal.Container hasVisible={updateState} >
                    <EasyRouteModal.Title title={title} />
                    <EasyRouteModal.Text text={'Por favor selecione a sua situação atual sobre a rota'} />
                    <Button text='Já estou no ônibus' onPress={() => handleCLick(true, true)} styles={{ backgroundColor: colors.greenSecondary }} />
                    <Button text='Eu não volto mais' onPress={() => handleCLick(false, false)} styles={{ backgroundColor: colors.danger }} />
                </EasyRouteModal.Container>
            }
        </>
    )
}