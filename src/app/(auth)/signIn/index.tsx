import { ScrollView } from 'react-native'
import { Image, Text, View } from 'react-native'
import { styles } from './style'
import AuthSwitch from '@/components/atoms/AuthSwitch'
import Stage from '@/components/atoms/stage'
import SignInForm from '@/components/molecules/signInForm'

export default function SignIn() {
  return (
    <ScrollView>
      <View style={styles.page}>

        <Image source={require("../../../assets/logo-easy-route.png")} style={styles.image} />

        <View>
          <Text style={styles.title}>🔑 Acesse sua conta</Text>
          <Text style={styles.text}>
            Continue sua jornada rumo a um transporte escolar mais eficiente com o Easy Route.
          </Text>
        </View>

        <SignInForm />

        <View style={{ gap: 20 }}>

          <AuthSwitch
            route={'/(auth)/signUp'}
            title='Novo por aqui?'
            subTitle='Faça parte da nossa comunidade!'
          />

          <AuthSwitch
            route={'/(auth)/signUp'}
            title='Esqueceu a senha?'
            subTitle='Recupere  rapidamente'
          />

          <Stage
            numbStage={3}
            stage={2}
          />
        </View>

      </View>
    </ScrollView>
  )
}

