export const getPeriod = (period: string) : string  => {
    const [hours, minuts] = period.split(":").map(Number) // divide a string no ":" e transforma os valores em números 

    if (hours >= 6 && hours < 12) {
        return "Turno da manhã";
    } else if (hours >= 12 && hours < 18) {
        return "Turno da tarde";
    } else if (hours >= 18 && hours < 24) {
        return "Turno da Noite";
    } else {
        return "Turno da madrugada";
    }
}
