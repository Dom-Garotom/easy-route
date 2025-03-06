import { busStops } from "@/mocks/stopBust";
import { getRoadMap } from "@/models/getRoadMap";
import { IconBusStop } from "@tabler/icons-react-native";
import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

export default function MapScren() {
  const [routeCoords, setRouteCoords] = useState<getRoadMap[]>([]);
  const [showBusStops, setShowBusStops] = useState(false);
  const origin = useMemo(() => ({ latitude: -6.145875, longitude: -38.205352 }), []);
  const destination = useMemo(() => ({ latitude: -6.112317, longitude: -38.31109 }), []);

  useEffect(() => {
    const fetchRoadMaps = async () => {
      const response = await getRoadMap(origin, destination);

      if (response && response.length > 0) {
        setRouteCoords(response);
        return;
      }

      alert('Não foi possivel achar a sua rota');
      return;
    };

    fetchRoadMaps();
  }, [destination, origin]);

  const handleRegionChange = (newRegion: any) => {
    if (newRegion.latitudeDelta > 0.06) {
      setShowBusStops(false);
    } else {
      setShowBusStops(true);
    }
  };

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
        onRegionChangeComplete={handleRegionChange}
      >
        <Marker coordinate={origin} title="Origem" />
        <Marker coordinate={destination} title="Destino" />

        {showBusStops && busStops.map((stop, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: stop.latitude, longitude: stop.longitude }}
            title={stop.name}
          >
            <IconBusStop size={40} color="blue" />
          </Marker>
        ))}

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
