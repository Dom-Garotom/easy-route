import ShortButton from '@/components/atoms/ShortButton/indext'
import colors from '@/styles/colors'
import { IconAlignJustified, IconCurrencyXrp, IconMenu4 } from '@tabler/icons-react-native'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function NavigationMenu() {
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleClickOptions = () => {
        setIsActive(false);
    }

    const handleClickMenu = () => {
        setIsActive(!isActive);
    }

    return (
        <View style={s.menu_container}>
            <ShortButton
                top={20}
                left={10}
                onClick={handleClickMenu}
            >
                {isActive ?
                    <IconCurrencyXrp color={colors.white} />
                    :
                    <IconAlignJustified color={colors.white} />
                }
            </ShortButton>

            {isActive &&
                <>
                    <ShortButton
                        path={'/notification'}
                        top={75}
                        left={10}
                        onClick={handleClickOptions}
                    >
                        <IconMenu4 color={colors.white} />
                        <Text style={s.menu_text}>Notificações</Text>
                    </ShortButton>

                    <ShortButton
                        path={'/person/' as '/person/index'}
                        top={130}
                        left={10}
                        onClick={handleClickOptions}
                    >
                        <IconMenu4 color={colors.white} />
                        <Text style={s.menu_text}>Configurações</Text>
                    </ShortButton>

                </>
            }

        </View>
    )
}


const s = StyleSheet.create({
    menu_container: {
        position: 'absolute',
    },

    menu_text: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.white
    }
})