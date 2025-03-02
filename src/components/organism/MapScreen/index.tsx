import ApiRoutesMocks from "@/mocks/routerItem";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapScren () {
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
        {/* Exemplo de marcador */}
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
});
