import { ScrollView } from 'react-native'
import { Image, Text, View } from 'react-native'
import { styles } from './style'
import AuthSwitch from '@/components/atoms/AuthSwitch'
import Stage from '@/components/atoms/stage'
import SignUpForm from '@/components/molecules/signUpForm'

export default function SignUp() {
  return (
    <ScrollView>
      <View style={styles.page}>

        {/* <Image source={require("../../../../assets/images/icon-art.png")} style={styles.image} /> */}

        <View>
          <Text style={styles.title}>🌟 Crie sua conta</Text>
          <Text style={styles.text}>
            
          </Text>
        </View>

        <SignUpForm/>

        <View style={{ gap: 20 }}>

          <AuthSwitch
            route={'/(auth)/signIn'}
            title='Já é um explorador?'
            subTitle='Faça login para continuar'
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

