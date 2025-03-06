import { View, Text } from 'react-native'
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {  z } from 'zod'
import colors from '@/styles/colors'
import InputDefault from '@/components/atoms/inputDefault'
import ButtonDefault from '@/components/atoms/ButtonDefault'
import useAuth from '@/hooks/auth'


export default function SignUpForm() {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(signUpForms)
    });

    const { serverMessageError, signUp, serverLoading } = useAuth();

    const onSubmit = (data: any) => {
        signUp(data);
    };

    return (
        <View style={{ gap: 16 }}>

            {serverMessageError &&
                <View>
                    <Text style={{ color: colors.danger }}>{`${serverMessageError}`}</Text>
                </View>
            }

            <Controller
                control={control}
                name='name'
                render={({ field: { onBlur, onChange, value } }) => (
                    <InputDefault
                        label={"Nome"}
                        placeholder='Seu nome'
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        messageError={errors.name?.message}
                    />
                )}

            />

            <Controller
                control={control}
                name='email'
                render={({ field: { onBlur, onChange, value } }) => (
                    <InputDefault
                        label={'Email'}
                        placeholder='Seu melhor email'
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        messageError={errors.email?.message}
                        keyboardType='email-address'
                    />
                )}

            />


            <Controller
                control={control}
                name='numero'
                render={({ field: { onBlur, onChange, value } }) => (
                    <InputDefault
                        label={'Número'}
                        placeholder='Seu melhor número'
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        maxLength={11}
                        messageError={errors.numero?.message}
                    />
                )}

            />

            <Controller
                control={control}
                name='senha'
                render={({ field: { onBlur, onChange, value } }) => (
                    <InputDefault
                        label={'Senha'}
                        placeholder='Sua senha'
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        messageError={errors.senha?.message}
                        secureTextEntry
                    />
                )}

            />

            <ButtonDefault
                text='Criar conta'
                color={colors.green}
                onPress={handleSubmit(onSubmit)}
                isLoading={serverLoading}
            />
        </View>
    )
}

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*.])[A-Za-z\d@#$%^&*.]+$/;

const signUpForms = z.object({
    name: z.string().min(4, { message: "o nome deve ter no mínimo quatro letras" }),
    email: z.string().email({ message: "formato inválido de email" }),
    numero: z.string().min(8).max(11, {message : "um número só pode ter no máximo 11 caracteres"}),
    senha: z.string().min(8, { message: "A senha deve ter no mínimo 8 caracteres " })
        .regex(regex, { message: "A sua senha deve conter pelo menos uma letra maiúsucula , uma minúscula , um número e um dos [@#$%^&*.]" }),
})
