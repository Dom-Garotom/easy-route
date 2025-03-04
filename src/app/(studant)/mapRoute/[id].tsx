import Button from "@/components/atoms/Button";
import RoadMapInfo from "@/components/molecules/RoadMapInfo";
import ApiRoutesMocks from "@/mocks/routerItem";
import colors from "@/styles/colors";
import { IconArrowLeft } from "@tabler/icons-react-native";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapRoute() {
  const { id } = useLocalSearchParams()
  const currentRoute = ApiRoutesMocks.find(item => item.id === id);


  return (
    <View style={s.container}>
      <MapView
        style={s.map}
        initialRegion={{
          latitude: -6.112317, // Latitude inicial (São Paulo como exemplo)
          longitude: -38.31109,// Longitude inicial
          latitudeDelta: 0.005,  // Maior zoom
          longitudeDelta: 0.005, // Maior zoom
        }}
      >
        <Marker
          coordinate={{
            latitude: -6.145875,
            longitude: -38.205352,

          }}
          title="Localização"
          description="Estou aqui!"
        />

        <Marker
          coordinate={{
            latitude:-6.112317,
            longitude: -38.31109,

          }}
          title="Localização"
          description="Estou aqui!"
        />
      </MapView>
      <RoadMapInfo
        title={currentRoute?.name!}
        studentsNumber={currentRoute?.confirmedStudants!}
        back={currentRoute?.back!}
        going={currentRoute?.going!}
      />
      <Button style={s.button} onPress={() => router.back()}>
        <IconArrowLeft color={colors.white} />
      </Button>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  button: {
    position: "absolute",
    top: 10,
    left: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 45,
    backgroundColor: colors.green,
    borderRadius: 10,
  },
});
