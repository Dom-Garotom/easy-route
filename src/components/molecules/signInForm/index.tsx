import { View, Text } from 'react-native'
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'
import colors from '@/styles/colors'
import InputDefault from '@/components/atoms/inputDefault'
import ButtonDefault from '@/components/atoms/ButtonDefault'
import useAuth from '@/hooks/auth'


export default function SignInForm() {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(signUpForms)
    });

    const { serverMessageError, signIn, serverLoading } = useAuth();

    const onSubmit = (data: any) => {
        console.log("sbmit")
        signIn(data);
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
                        label={'Name'}
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
                text='Entrar'
                color={colors.green}
                onPress={handleSubmit(onSubmit)}
                isLoading={serverLoading}
            />
        </View>
    )
}

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*.])[A-Za-z\d@#$%^&*.]+$/;

const signUpForms = z.object({
    name: z.string().min( 4 ,{ message: "Seu nome de ter no minímo 4 letras" }),
    email: z.string().email({ message: "formato inválido de email" }),
    senha: z.string().min(8, { message: "A senha deve ter no mínimo 8 caracteres " })
        .regex(regex, { message: "A sua senha deve conter pelo menos uma letra maiúsucula , uma minúscula , um número e um dos [@#$%^&*.]" }),
})
