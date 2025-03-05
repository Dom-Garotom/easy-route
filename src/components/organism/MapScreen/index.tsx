import { getRoadMap } from "@/models/getRoadMap";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

export default function MapScren() {
  const [routeCoords, setRouteCoords] = useState<getRoadMap[]>([]);
  const origin = { latitude: -6.145875, longitude: -38.205352 }; 
  const destination = { latitude: -6.112317, longitude: -38.31109 }; 

  useEffect(() => {
    const fetchRoadMaps = async () => {
      const response = await getRoadMap(origin , destination)

      if (response && response.length > 0){
        setRouteCoords(response)
        return;
      }

      alert('Não foi possivel achar a sua rota')
      return;
    }

    fetchRoadMaps()
  }, [destination , origin]);



  return (
    <View style={s.container}>
      <MapView
        style={s.map}
        initialRegion={{
          latitude: -6.112317, 
          longitude: -38.31109,
          latitudeDelta: 0.005, 
          longitudeDelta: 0.005, 
        }}
      >
        <Marker coordinate={origin} title="Origem" />
        <Marker coordinate={destination} title="Destino" />

        {routeCoords.length > 0 && (
          <Polyline
            coordinates={routeCoords}
            strokeWidth={4}
            strokeColor="blue"
          />
        )}

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
