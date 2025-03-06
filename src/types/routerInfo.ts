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
    duration: number;
    duration_measurement: string;
    confirmedStudants: number
    bus: BusInfo;
    startRoute: Location,
    endRoute: Location,
};

interface Bus {
    id: number;
    driver: string;
    model: string;
    plate: string;
    capacityStudents: number;
}

interface Institution {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

export interface Route {
    id: number;
    name: string;
    description: string;
    confirmedStudents: number;
    timeGoing: string; // formato HH:mm:ss
    timeBack: string; // formato HH:mm:ss
    duration: number;
    duration_measurement: string;
    is_going_started: boolean;
    is_going_finished: boolean;
    is_back_started: boolean;
    is_back_finished: boolean;
    bus: Bus[];
    institution: Institution;
}



