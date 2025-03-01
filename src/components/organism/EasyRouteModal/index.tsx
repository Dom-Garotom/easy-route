import { Modal, Pressable, Text, View } from 'react-native'
import { ReactNode, useState } from 'react'
import { s } from './style'

function ModalContainer({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState<boolean>(true)
    return (
        <Modal visible={isOpen} transparent animationType='slide'  >
            <View style={s.modal}>
                <Pressable style={{ flex: 1 }} onPress={() => setIsOpen(false)} />
                <View style={s.modal_container}>
                    {children}
                </View>
            </View>
        </Modal>
    )
}

function ModalTitle({ title }: { title: string }) {
    return (
        <Text style={s.modal_title}>{title}</Text>
    )
}

function ModalText({ text }: { text: string }) {
    return (
        <Text style={s.modal_text}>{text}</Text>
    )
}


export const EasyRouteModal = {
    Container: ModalContainer,
    Title: ModalTitle,
    Text: ModalText,
}