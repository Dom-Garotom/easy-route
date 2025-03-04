interface YourRouteProps {
    route_id: string 
    title: string
    going ?: string
    back ?: string
}

export const ApiYourRoutes: YourRouteProps[] = [
    {
        route_id: "1",
        title: "Rota Matutina",
        going: "06:30:00",
    },
    {
        route_id: "2",
        title: "Rota Vespertina",
        going: "13:00:00",
        back: "18:30:00",
    },
    {
        route_id: "3",
        title: "Rota Noturna",
        going: "19:00:00",
        back: "23:30:00",
    },
    {
        route_id: "4",
        title: "Rota Escolar A",
        back: "11:45:00",
    },
    {
        route_id: "5",
        title: "Rota Escolar B",
        going: "13:15:00",
        back: "17:45:00",
    },
    {
        route_id: "6",
        title: "Rota Universitária",
        back: "22:15:00",
    },
    {
        route_id: "7",
        title: "Rota Especial",
        going: "00:30:00",
        back: "04:45:00",
    },
    {
        route_id: "8",
        title: "Rota Rural",
        going: "05:30:00",
        back: "10:00:00",
    },
    {
        route_id: "9",
        title: "Rota Comercial",
        going: "14:00:00",
    },
    {
        route_id: "10",
        title: "Rota Industrial",
        going: "03:00:00",
        back: "07:30:00",
    }
];
