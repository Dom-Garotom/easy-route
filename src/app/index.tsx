import ButtonDefault from "@/components/atoms/ButtonDefault"
import Stage from "@/components/atoms/stage"
import { router } from "expo-router"
import { Image, StyleSheet, Text, View } from "react-native"


export default function index() {
  return (
    <View style={styles.page}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/logo-easy-route.png")} style={styles.image} />


        <Text style={styles.text}>
          O ArtiSphere é mais do que uma plataforma de artigos,
          é o lugar onde ideias se encontram e transformam o mundo.
          Para continuar, escolha como quer fazer parte dessa jornada!
        </Text>

      </View>


      <ButtonDefault
        text='Crie sua conta e comece'
        color="#071E2C"
        onPress={() => router.navigate('/(auth)/signUp')}
      />

      <ButtonDefault
        text='Faça login para continuar explorando'
        color="#071E2C"
        onPress={() => router.navigate('/(auth)/signIn')}
      />


      <ButtonDefault
        text='Driver'
        color="#071E2C"
        onPress={() => router.navigate('/(driver)/driver')}
      />

<ButtonDefault
        text='Driver'
        color="#071E2C"
        onPress={() => router.navigate('/(studant)/home')}
      />

      <Stage
        numbStage={3}
        stage={1}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20,
    gap: 16,
  },

  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    gap: 12,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 16,
  },

  text: {
    fontSize: 18,
    textAlign: 'center',
  },

})



// <>
// <View style={{flex:1, padding: 20 , justifyContent:'center' , alignItems: 'center'}}>
// <Text>Students</Text>
//   <Button text='Click' onPress={() => router.navigate("/home")}/>
// </View>

// <View style={{flex:1, padding: 20 , justifyContent:'center' , alignItems: 'center'}}>
// <Text>DRIVER</Text>
//   <Button text='Click' onPress={() => router.navigate("/driver" as '/driver/index')}/>
// </View>

// <View style={{flex:1, padding: 20 , justifyContent:'center' , alignItems: 'center'}}>
// <Text>Login</Text>
//   <Button text='Click' onPress={() => router.navigate("/(auth)/signIn")}/>
// </View>

// <View style={{flex:1, padding: 20 , justifyContent:'center' , alignItems: 'center'}}>
// <Text>Register</Text>
//   <Button text='Click' onPress={() => router.navigate('/(auth)/signUp')}/>
// </View>


// </>