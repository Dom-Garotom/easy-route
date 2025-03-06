import Button from "@/components/atoms/Button";
import RoadMapInfo from "@/components/molecules/RoadMapInfo";
import { busStops } from "@/mocks/stopBust";
import { getRoadMap } from "@/models/getRoadMap";
import { getRouteDetails } from "@/models/getRoutesDetails";
import colors from "@/styles/colors";
import { Route } from "@/types/routerInfo";
import { IconArrowLeft, IconBusStop } from "@tabler/icons-react-native";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import { View, Alert } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { s } from "./style";

type Destination = {
  latitude: number;
  longitude: number;
};

export default function MapRoute() {
  const { id } = useLocalSearchParams();
  const [routes, setRoutes] = useState<Route | null>(null);
  const [routeCoords, setRouteCoords] = useState<getRoadMap[]>([]);
  const [showBusStops, setShowBusStops] = useState(false);
  const [destination, setDestination] = useState<Destination | null>(null);

  const origin = useMemo(() => ({ latitude: -6.145875, longitude: -38.31109 }), []);

  // Busca os detalhes da rota
  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const responseRoutes = await getRouteDetails(id.toString());
        if (!responseRoutes) {
          Alert.alert("Erro", "Não foi possível encontrar a rota.");
          return;
        }
        setRoutes(responseRoutes);
      } catch (error) {
        console.error("Erro ao buscar rota:", error);
        Alert.alert("Erro", "Ocorreu um erro ao buscar a rota.");
      }
    };

    fetchRoutes();
  }, [id]);

  // Atualiza o destino e busca o trajeto quando `routes` estiver definido
  useEffect(() => {
    if (!routes) return;

    const currentDestination = {
      latitude: routes.institution.latitude,
      longitude: routes.institution.longitude,
    };

    setDestination(currentDestination);

    const fetchRoadMap = async () => {
      try {
        const responseRoadMap = await getRoadMap(origin, currentDestination);
        if (!responseRoadMap) {
          Alert.alert("Erro", "Não foi possível encontrar o caminho.");
          return;
        }
        setRouteCoords(responseRoadMap);
      } catch (error) {
        console.error("Erro ao buscar trajeto:", error);
        Alert.alert("Erro", "Ocorreu um erro ao buscar o trajeto.");
      }
    };

    fetchRoadMap();
  }, [routes]);

  const handleRegionChange = (newRegion: any) => {
    setShowBusStops(newRegion.latitudeDelta <= 0.04);
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
        {destination && <Marker coordinate={destination} title="Destino" />}

        {showBusStops &&
          busStops.map((stop, index) => (
            <Marker
              key={index}
              coordinate={{ latitude: stop.latitude, longitude: stop.longitude }}
              title={stop.name}
            >
              <IconBusStop size={40} color="blue" />
            </Marker>
          ))}

        {routeCoords.length > 0 && <Polyline coordinates={routeCoords} strokeWidth={4} strokeColor="blue" />}
      </MapView>

      {routes && (
        <RoadMapInfo
          title={routes.name}
          studentsNumber={routes.confirmedStudents}
          back={routes.timeBack}
          going={routes.timeGoing}
        />
      )}

      <Button style={s.button} onPress={() => router.back()}>
        <IconArrowLeft color={colors.white} />
      </Button>
    </View>
  );
}
