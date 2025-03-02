type BusInfo = {
    driver: string;
    model: string;
    plate: string;
    capacityStudents: number;
};

type Location = {
    latitude: string,
    longititude: string,
}

export type RouteInfo = {
    id: string;
    name: string;
    description: string;
    going: string;  // HH:MM:SS
    back: string;  // HH:MM:SS
    duration: number ;
    duration_measurement: string;
    confirmedStudants : number
    bus: BusInfo;
    startRoute : Location,
    endRoute : Location,
};