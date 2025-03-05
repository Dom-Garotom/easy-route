import { requestApi } from "@/services/request";

export type getRoadMap = {
    latitude: number,
    longitude: number,
}

interface MapPoint {
    latitude: number,
    longitude: number,
}

export const getRoadMap = async (origin: MapPoint, destination: MapPoint): Promise<getRoadMap[] | undefined> => {
    try {
        const url = `https://router.project-osrm.org/route/v1/driving/${origin.longitude},${origin.latitude};${destination.longitude},${destination.latitude}?overview=full&geometries=geojson`;
        const roadMapResponse = await requestApi<any>(url, "get")

        if (roadMapResponse.routes.length) {
            const coords = roadMapResponse.routes[0].geometry.coordinates.map(([lon, lat]) => ({
                latitude: lat,
                longitude: lon,
            }));

            return coords
        }

    } catch (error) {
        console.error("Erro ao buscar rota:", error);
        return undefined
    }
}